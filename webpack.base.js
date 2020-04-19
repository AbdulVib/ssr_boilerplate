module.exports = {
    devServer: {
        // historyApiFallback: true,
        inline: true, // autorfrsh 
     },
       module: {
          rules: [
             {
                test: /\.jsx?$/, // srch fr js fls 
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
       ]
    }
}