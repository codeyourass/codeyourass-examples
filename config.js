System.config({
  "baseURL": "/",
  "transpiler": "typescript",
  "defaultJSExtensions": true,
  "typescriptOptions": {
    "module": "commonjs",
    "emitDecoratorMetadata": true
  },
  "paths": {
    "npm:*": "packages/npm/*.js",
    "*": "*.ts",
    "github:*": "packages/github/*.js"
  }
});

