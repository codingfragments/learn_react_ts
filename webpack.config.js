var HtmlWebpackPlugin = require('html-webpack-plugin');
var WriteFilePlugin =require ('write-file-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
MiniCssExtractPlugin = require("mini-css-extract-plugin");
devMode = process.env.NODE_ENV !== 'production';



module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/build/app"
    },

    "devtool": "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader?limit=1024', 
                options:{
                    outputPath: 'images'
                },
              },
            {test: /\.(gif|png|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          outputPath: 'images'
                        }
                  },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                    },
                  },
                ],
            },
            { test: /\.(png|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000',
                    options: {outputPath:"cssAssets"} 
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader:  MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: '../index.html', //relative to root of the application
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: __dirname + "/src/index.html",
       
        }),
        new WriteFilePlugin(),
        new CopyWebpackPlugin([{
            from: __dirname+"/public/**/*",
            to: __dirname+"/build/"
        }]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
          })
   ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
     //   "react": "React",
     //   "react-dom": "ReactDOM"
    },
};