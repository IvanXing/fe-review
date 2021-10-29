module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename: 'output.js',
        publicPath: '/dist/'
    },
    externals: {
        'jquery': 'jQuery'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}