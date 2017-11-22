/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    }
  })

  return app.toTree()
}
