const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    optimization: {
      splitChunks: {
          chunks: "all"
      }
    },
    entry: {
        app: ["@babel/polyfill",path.resolve(__dirname, '../src/index.js')],
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
                    'style-loader',
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
        new OptimizeCssAssetsWebpackPlugin(),
        new CleanWebpackPlugin()
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
    performance: {
        // false "error" "warning" 不显示性能提示，以错误形式提示，以警告..
        hints: "warning",
        // 开发环境设置较大防止警告
        // 根据入口起点的最大体积，控制webpack何时生辰性能提示，证书类型，以字节为单位
        maxEntrypointSize: 5000000,
        maxAssetSize: 3000000
    },
    devtool: "none" // 源码调试
}