const path = require('path');

module.exports = {
    // ...
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'components': path.resolve(__dirname, 'src/')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
    }
};