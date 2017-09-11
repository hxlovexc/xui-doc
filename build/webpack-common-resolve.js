const utils = require('./utils');

module.exports = {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': utils.resolve('src'),
    'static': utils.resolve('src/static/'),
    'views': utils.resolve('src/views/'),
    'components': utils.resolve('src/components'),
    'highlight.js': utils.resolve('src/static/js/highlight.js')
  }
}
