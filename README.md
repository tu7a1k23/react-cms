# react-cms
New generation CMS on top of React

The project directory should now have the following structures:

```
+-- `dist`
|   +-- `index.html`: application page
+-- `node_modules`: NPM components
+-- `src`
|   +-- `css`
|   |   +-- `_variables.scss`: application styles constant values
|   |   +-- `app.scss`: application styles
|   +-- `js`
|   |   +-- `common`: code of shared function
|   |   +-- `components`: code (scripts and views) of every feature should be a sub-directory
|   |   +-- `services`: code of services
|   |   +-- `stores`: code of stores
|   |   +-- `ux`: code of shared components
|   |   +-- `main.js`: main script
+-- `gulpfile.babel.js`: build scripts
+-- `package.json`: NPM package definition
+-- `server.js`: code of `express` server, should point to `dist` folder
```

Based on this seed structure, you're ready to make any change to build your application.
