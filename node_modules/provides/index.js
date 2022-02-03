const symbol = require('symbol')

const PROVIDES = symbol('@@interopjs/provides')

module.exports = function provides(name) {
  return function (provider, file) {
    const _provides = global[PROVIDES]
    if (!_provides) return
      _provides(name, provider, file)
  }
}
module.exports.default = module.exports
module.exports.symbol = PROVIDES
