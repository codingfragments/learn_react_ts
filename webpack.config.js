var HtmlWebpackPlugin = require('html-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Later to add manual minimization
// UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;




module.exports = (env, argv) => {

    devMode = argv.mode !== 'production';
    splitChunks = true; // Enable SplitChunks here
    analyze = true;


    return {
        //entry: "./src/index.tsx",
        entry: {
            app: './src/index.tsx'
        },

        output: {
            filename: devMode ? '[name].js' : '[name]-[chunkhash].js',
            chunkFilename: '[name]-[chunkhash].js',
            path: __dirname + "/build/app",
        },
        optimization: {
            
            splitChunks: {
                chunks: 'all',
                //               chunks: "async",
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendorModules: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },

        devtool: devMode ? "eval-source-map" : "source-map",

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {
                    test: /\.tsx?$/,
                    loader: "awesome-typescript-loader"
                },

                // inline svg
                {
                    test: /\.svg$/,
                    loader: 'svg-url-loader?limit=10000',
                    options: {
                        outputPath: 'images/svg'
                    },
                },
                {
                    test: /\.(gif|png|jpe?g)$/i,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images'
                        }
                    }],
                },
                {
                    test: /\.(woff|woff2|eot|ttf)$/,
                    loader: 'url-loader?limit=10000',
                    options: {
                        outputPath: "cssAssets"
                    }
                },
                {
                    test: /\.s?css$/,
                    use: [{
                            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                },

            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                hash: devMode ? true : false,
                filename: '../index.html', //relative to root of the application
                title: 'My Awesome application',
                myPageHeader: 'Hello World',
                inject: "header",
                template: __dirname + "/src/index.html",

            }),
            new WriteFilePlugin(),
            new CopyWebpackPlugin([{
                from: __dirname + "/public/**/*",
                to: __dirname + "/build/"
            }]),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '[name].css' : '[name].[chunkhash].css',
                chunkFilename: devMode ? '[name].css' : '[name].[hash].css',
            }),

            new BundleAnalyzerPlugin({
                analyzerMode: "disable",
                generateStatsFile: true,
                statsFilename: "../webpack-stats.json"
            }),


        ],

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            //   "react": "React",
            //   "react-dom": "ReactDOM"
        },
    }
}