'use strict'

const babel = require('babel-core');

/**
 * This is your `.babelrc` equivalent.
 */
const babelRC = {
    presets: [require('babel-preset-react-native')],
    "sourceMaps": true,
    plugins: [

        // The following plugin will rewrite imports. Reimplementations of node
        // libraries such as `assert`, `buffer`, etc. will be picked up
        // automatically by the React Native packager.  All other built-in node
        // libraries get rewritten to their browserify counterpart.

        [require('babel-plugin-rewrite-require'), {
            aliases: {
                constants: 'constants-browserify',
                crypto: 'crypto-browserify',
                dns: 'node-libs-browser/mock/dns',
                domain: 'domain-browser',
                fs: 'node-libs-browser/mock/empty',
                http: 'stream-http',
                https: 'https-browserify',
                net: 'node-libs-browser/mock/net',
                os: 'os-browserify/browser',
                path: 'path-browserify',
                querystring: 'querystring-es3',
                stream: 'stream-browserify',
                _stream_duplex: 'readable-stream/duplex',
                _stream_passthrough: 'readable-stream/passthrough',
                _stream_readable: 'readable-stream/readable',
                _stream_transform: 'readable-stream/transform',
                _stream_writable: 'readable-stream/writable',
                sys: 'util',
                timers: 'timers-browserify',
                tls: 'node-libs-browser/mock/tls',
                tty: 'tty-browserify',
                vm: 'vm-browserify',
                zlib: 'browserify-zlib',
                pbkdf2: 'react-native-pbkdf2-shim'
            },
            throwForNonStringLiteral: true
        }]
    ]
};

module.exports = (src, filename) => {

    const babelConfig = Object.assign({}, babelRC, {
        filename,
        sourceFileName: filename
    });

    const result = babel.transform(src, babelConfig);
    return {
        ast: result.ast,
        code: result.code,
        map: result.map,
        filename
    };
}