const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin')

var path = require('path')
var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var mode = process.env.NODE_ENV; // production or development

var styleLoaders = mode !== 'production' ? [ 'vue-style-loader', 'css-loader', 'sass-loader' ] : [ MiniCssExtractPlugin.loader,  'css-loader', 'sass-loader'] ;

module.exports = {
    mode: mode,
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        path: BUILD_DIR,
        chunkFilename: '[id].chunk.js',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: styleLoaders
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/', // where the fonts will go
                        publicPath: mode !== 'production' ? 'assets/fonts' : '../fonts/' // override the default path
                    }
                }]
            },
        ]
    },
    resolve: {
        alias: { 
            vue: 'vue/dist/vue.js',
            '@': APP_DIR
        },
        extensions: ['*', '.js', '.vue', '.json'],
        modules: [
            "node_modules",
            APP_DIR
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // filename: 'style.css'
            filename: "assets/css/style.css"
        })
    ],
    optimization: {
    }
}

if (mode === 'production') {
    module.exports.devtool = '#source-map'

    module.exports.optimization.minimize = true;
    module.exports.optimization.minimizer = (module.exports.optimization.minimizer || []).concat([
        new TerserPlugin()
    ]);


    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}