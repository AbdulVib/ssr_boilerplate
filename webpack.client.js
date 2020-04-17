const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
    
    // The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
    mode: 'development',

    //tell webpack our root file or entry file 
    entry: './src/client/client.js',

    //tell webpack where to put the output file
    output:{
        filename: 'bundle.js', //file name
        path: path.resolve(__dirname, 'public') //foldername
    }

}

module.exports = merge(baseConfig, config)