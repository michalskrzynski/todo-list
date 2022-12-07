module.exports = {  
  mode: 'development',  
  entry: './src/index.js',  
  devtool: 'inline-source-map',
  output: {  
    filename: 'main.js',  
    publicPath: 'dist'  
  },  
  module: {
    rules: [  
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};