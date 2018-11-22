var path = require("path");

module.exports = {
    devtool: 'source-map',
    output: {
        filename: 'entry.js',
    },
    resolve: {
        alias: {
            '@Kosmos': path.resolve(__dirname, 'src/assets/js'),
            '@lodash': path.resolve(__dirname, 'node_modules/lodash')
        }
    },
};
