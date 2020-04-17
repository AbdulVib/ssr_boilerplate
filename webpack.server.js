const path = require('path')

const config = {
    
    // The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
    mode: 'development',
    //inform webpack that we r building bundle for nodejs
    target: 'node', 

    //tell webpack our root file or entry file 
    entry: './src/index.js',

    //tell webpack where to put the output file
    output:{
        filename: 'bundle.js', //file name
        path: path.resolve(__dirname, 'build') //foldername
    },

    //tell webpack to run babel on each nd every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browser: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}

module.exports = config