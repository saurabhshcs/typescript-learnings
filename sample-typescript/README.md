
### Install nodemon
`npm i -D nodemon`
### Run with nodemon
`npx nodemon dist/index.js`
### Run with nodemon with watch & quiet mode
`npx nodemon -w dist -q dist/index.js`
### Install concurrently
`npm i -D concurrently`
### Run with concurrently
`npx concurrently "tsc -w" "nodemon -w dist -q dist/index.js"`

### Output
```
10:47:52 - Starting compilation in watch mode...
[0] 
[1] 14 * 9 = 126
[0] 
[0] 10:47:53 - Found 0 errors. Watching for file changes.
[1] 14 * 9 = 126
```
### Run with additional parameters for showing each inline thread process & coloured these
`npx concurrently -n COMPILER,NODEMON -c yellow,blue "tsc -w" "nodemon -w dist -q dist/index.js"`
```node
10:48:51 - Starting compilation in watch mode...
[COMPILER] 
[NODEMON] 14 * 9 = 126
[COMPILER] 
[COMPILER] 10:48:52 - Found 0 errors. Watching for file changes.
[NODEMON] 14 * 9 = 126
```
