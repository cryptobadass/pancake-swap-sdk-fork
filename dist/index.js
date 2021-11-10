
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-fork.cjs.production.min.js')
} else {
  module.exports = require('./sdk-fork.cjs.development.js')
}
