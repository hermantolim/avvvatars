
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./avvvatars-react-alt.cjs.production.min.js')
} else {
  module.exports = require('./avvvatars-react-alt.cjs.development.js')
}
