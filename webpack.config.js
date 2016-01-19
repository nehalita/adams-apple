var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
    context: __dirname,
    entry: './app/assets/javascripts/application.js',

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};