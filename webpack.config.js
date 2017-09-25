var webpack = require("webpack");

module.exports = {
    cache: true,
    entry: {
        //"bundle": [__dirname + "/app/main.ts"],
        "bundle": [__dirname + "/app/main-aot.ts"],
        "bundle-vendors": [
            "core-js",
            "zone.js",
            "rxjs",
            "@angular/core",
            "@angular/common",
            //"@angular/compiler",
            "@angular/platform-browser",
            //"@angular/platform-browser-dynamic",
            "@angular/http",
            "@angular/router",
            "@angular/forms"
        ]
    },
    output: {
        path: __dirname + "/js",
        filename: "[name].js",
        sourceMapFilename: "[name].map"
    },
    resolve: {
        extensions: [".ts", ".js", ".html"]
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loaders: [
                    "awesome-typescript-loader",
                    "angular2-template-loader"
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "bundle-vendors"
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            __dirname + "./app"
        )
    ]
}