/**
 * Created by edwardzhao on 16/6/17.
 */
var path = require('path');
module.exports = {
    entry: path.join(__dirname,"entry.jsx"),
    output: {
        path:path.join(__dirname,"dist"),
        filename: "dist.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                //exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devServer: {
        proxy: {
            '/api/*': {
                target: "http://localhost/",
                secure: false,
            }
        }
    }

}
