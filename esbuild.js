/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint no-console: 0 */

const path = require('path');
const esbuild = require('esbuild');
const servor = require('servor');
const alias = require('esbuild-plugin-alias');
const sassPlugin = require('esbuild-plugin-sass');
const postCssPlugin = require('@deanc/esbuild-plugin-postcss');
const autoprefixer = require('autoprefixer');

require('dotenv').config();

/**
 * Set Config Variables
 */

const isDevServer = process.argv.includes('--dev');
const port = 8000;
const outDir = 'dist/build';
const serveDir = 'dist';

// const define = {};
// for (const k in process.env) {
//   if (k.startsWith('REACT_APP_')) {
//     define[`process.env.${k}`] = JSON.stringify(process.env[k]);
//   }
// }

const define = Object.keys(process.env)
  .filter((env) => env.startsWith('REACT_APP_'))
  .reduce((acc, inc) => {
    acc[`process.env.${inc}`] = JSON.stringify(process.env[inc]);

    return acc;
  }, {});

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
  define,
  plugins: [
    alias({
      models: path.resolve(__dirname, 'src/shared/models/index.d.ts'),
      providers: path.resolve(__dirname, 'src/shared/providers/index.ts'),
      themes: path.resolve(__dirname, 'src/shared/themes/index.ts'),
      styled: path.resolve(__dirname, 'src/shared/styled/index.ts'),
      components: path.resolve(__dirname, 'src/shared/components/index.ts'),
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
