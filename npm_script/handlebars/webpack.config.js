const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname + "/src/main.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/dist/js")
    },
    devtool: "source-map",
    // externals:{
    //     'jquery': 'jQuery'
    // },
    watch: true,
    watchOptions: {
        ignored: /node_modules|dist|build|docs|css/,
        poll: 1000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.hbs/,
                loader: 'handlebars-loader'
            }
        ]
    },
    resolve:{
        extensions: ['.js','.vue'],
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}