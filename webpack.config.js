module.exports = {
    output: {
      filename: './bundle.js'
    },

    module: {
      loaders: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      }]
    }
}
