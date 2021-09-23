
## What is nodemon?
> nodemon is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected. ... nodemon is a replacement wrapper for node . To use nodemon , replace the word node on the command line when executing your script.
> 
### Install nodemon
`npm i -D nodemon`
### Run with nodemon
`npx nodemon dist/index.js`
### Run with nodemon with watch & quiet mode
`npx nodemon -w dist -q dist/index.js`
## What is concurrently?
> Concurrently is an npm package that allows you to run multiple commands concurrently. A very well named package this one.
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
