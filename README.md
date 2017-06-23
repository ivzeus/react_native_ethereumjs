# react_native_ethereumjs
Simple React Native project with Ethereumjs libraries.

The solution comes from [ReactNativify](https://github.com/philikon/ReactNativify/issues?utf8=%E2%9C%93&q=).

## Steps
- Copy following files to your project, they will act as a custom transformer for ReactNative during build process 
    - [transformer.js](https://github.com/wswoodruff/strangeluv-native/blob/master/config/transformers.js)
    - [babel-transform.js](https://github.com/wswoodruff/strangeluv-native/blob/master/config/babel-transformer.js)
    - [global.js](https://github.com/philikon/ReactNativify/blob/master/global.js)
    - [rn-cli.config.js](https://github.com/philikon/ReactNativify/blob/master/rn-cli.config.js)

- Remove old node_modules `rm -rf node_modules`
- Modify `package.json` file:
    ~~~~
    npm install -g npm3
    npm3 install
    yarn add --dev babel-plugin-rewrite-require
    yarn add node-libs-browser
    ~~~~
- Add this dependency into `package.json` file (this is temporary)
    ~~~~
    // in package.json
    "react-native-pbkdf2-shim": "git+https://git@github.com/wswoodruff/react-native-pbkdf2-shim.git"
    ...
    // in terminal
    yarn install
    ~~~~
- If your project already has a `.babelrc` file, merge its contents into `babel-transform.js` copied in above. After that remove `.babelrc`.
- Import `global.js` on top of `index.ios.js` and `index.android.js`.