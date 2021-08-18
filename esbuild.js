/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint no-console: 0 */

const path = require('path');
const esbuild = require('esbuild');
const servor = require('servor');
const alias = require('esbuild-plugin-alias');
const sassPlugin = require('esbuild-plugin-sass');
const postCssPlugin = require('@deanc/esbuild-plugin-postcss');
const autoprefixer = require('autoprefixer');

/**
 * Set Config Variables
 */

const isDevServer = process.argv.includes('--dev');
const port = 8000;
const outDir = 'dist/build';
const serveDir = 'dist';

/**
 * Set ESbuild Config
 */

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: outDir,
  minify: !isDevServer,
  watch: isDevServer && {
    onRebuild(err, _res) {
      if (err) console.error('Watch build failed: ', err);
    },
  },
  define: {
    'process.env.NODE_ENV': isDevServer ? '"development"' : '"production"',
  },
  plugins: [
    alias({
      models: path.resolve(__dirname, 'src/shared/models/index.d.ts'),
      providers: path.resolve(__dirname, 'src/shared/providers/index.ts'),
      themes: path.resolve(__dirname, 'src/shared/themes/index.ts'),
      styled: path.resolve(__dirname, 'src/shared/styled/index.ts'),
    }),
    sassPlugin(),
    postCssPlugin({
      plugins: [autoprefixer],
    }),
  ],
});

/**
 * Serve if Dev Env
 */

async function serve() {
  await servor({
    root: serveDir,
    port: 8000,
  });

  console.log(`Serving in localhost:${port}`);
}

if (isDevServer) serve();
