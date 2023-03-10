const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        watchFiles: path.resolve(__dirname, '../dist'),
    },
};
