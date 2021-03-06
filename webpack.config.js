const path = require('path');
var nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    library: 'index',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  }
};
