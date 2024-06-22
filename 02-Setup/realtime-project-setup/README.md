# Realtime Project Setup

### Setup
1. Install node
2. `npm init -y` Setup Node Environment -> Create package.json file
3. create `index.html`
4. create two folders :
    * __src__ : development
    * __dist__ : production
5. `tsc --init` create __tsconfig.json__ file
6. create `index.ts` file in src folder
7. modify __tsconfig.json__ file -> __"ourDir":"./dist"__ for tell dist folder path
8. Run the Application on watch mode -> `tsc -w`
   * It automatically generates `JS` file of `TS` in dist folder when changes in TS files.
9. Link generated `JS` file in dist folder to `index.html`
10. Start the Application (index.html) on live-server using __vscode extension live server__.
11. `git init`  && `.gitignore` for untrack the node_modules 
12. Optional -> use third-party-package 
    * `npm install lite-server`
    * Lightweight development only node server that serves a web app, opens it in the browser, refreshes when html or javascript change
    * Start : `lite-server` 


### Start
`npm start` -> start the application

