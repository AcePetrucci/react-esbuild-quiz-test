# React ESbuild Quiz Test

This test was made with React, ESbuild and ESlint.

I made it as I would develop an enterprise application, so there's a little bit of complexity that you may find odd given the scope of the test. I chose not to include authentication since that would go way overboard than the original intent.
## Installation
Run:
```bash
  npm install
```

ESbuild will serve the files in `localhost:8000`, but you may freely change it in the `esbuild.js` config file.

```js
  ...
  async function serve() {
    await servor({
      root: serveDir,
      port: 8000, // Change the port here
    });
    ...
  }
```

## Running
You can serve the application by running:
```bash
  npm run start
```

Or you can build the files by running:
```bash
  npm run build
```

This application requires an API url which I defined in a `.env` file that for obvious reasons is not in the repo. If you have the url, just create a `.env` at the root with the `REACT_APP_QUIZ_API` key.

The static assets (currently only the .html file) are in the /dist folder.

The generated build files are in /dist/build.