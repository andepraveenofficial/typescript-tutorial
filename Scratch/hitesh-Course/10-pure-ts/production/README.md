# Production code

### Setup
* `tsc --init` create config file
* `npm init -y` setup Node Environment -> creates package.json file
* `index.html`
* create two folders -> __src__, __dist__
* modify tsconfig file : __"outDir":"./dist"
* run application on watch mode `tsc -w`-> automatically generate js file in dist folder
* link dist `index.js` file to `index.html`
* run application in live-server

### watch mode
* `tsc -w` Run in the watch mode
   - It takes tsconfig file and generate js files in dist folder.

### lite-server
* `npm install lite-server`
* Lightweight development only node server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes using sockets, and has a fallback page when a route is not found.
* you can use __vs-code live server__ also

### Start the Application
* `npm start` -> start the application