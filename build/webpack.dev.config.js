const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: [path.resolve(__dirname, '../src/index.js')],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        filename: "[name].[hash].js",
        chunkFilename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                // src目录下面以.js结尾的文件都要使用babel解析
                // cacheDirectory是用来缓存的，下次编译加速
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src')
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    // 'css-loader?modules' css modules优化
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8 * 1024 // 当图片小于8M后使用后base64进行打包
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: "index.html",
          template: path.join(__dirname, '../public/index.html')
      }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: "[id].[contenthash].css"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            images: path.join(__dirname, '../src/images')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true, // gzip压缩
        // host: '0.0.0.0', // 允许IP访问
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        port: 8888,
        proxy: { // 配置服务器代理 http://localhost:3000/api/user
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': '/api'
                },
                changeOrigin: true // 让target参数是域名
                // secure: false 设置支持https协议代理
            }
        }
    },
    devtool: "inline-source-map" // 源码调试
}