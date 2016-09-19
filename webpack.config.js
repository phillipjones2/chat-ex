module.exports = {
  entry: "./src/entry.js",
  output: {
    path: __dirname + "build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader"
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules | bower_conponents)/,
        loader: 'babel',
        query: {
          presets: ['es2015','react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.svg$/,
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
      },
    ]
  },
  watch: true
}
