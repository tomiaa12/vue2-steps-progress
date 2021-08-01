const path = require('path');
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'packages/index.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
        'assets': resolve('src/assets'),
        'views': resolve('src/views'),
      }
    },
    output: {
      libraryExport: 'default'
    }
  },
  productionSourceMap: false,
  css: {
    extract: false,
  },
}
