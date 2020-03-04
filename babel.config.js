const babelConfig = {
    presets: [
        ["@babel/preset-env",{
            useBuiltIns: "entry",
            corejs: 2
        }
    ], "@babel/preset-react"],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        ['@babel/plugin-transform-runtime'],
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
    ]
}

module.exports = babelConfig;