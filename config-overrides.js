const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets' : 'src/assets',
    '@pages' : 'src/pages',
    '@config' : 'src/config',
    '@api' : 'src/api',
    '@hooks' : 'src/hooks',
    '@redux' : 'src/redux',
  })(config)

  return config
}