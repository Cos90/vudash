'use strict'

const Path = require('path')

const AssetsPlugin = {
  register: function (server, options, next) {
    server.route({
      method: 'GET',
      path: '/thirdparty/{param*}',
      handler: {
        directory: {
          path: __dirname
        }
      }
    })

    server.route({
      method: 'GET',
      path: '/assets/{param*}',
      handler: {
        directory: {
          path: Path.join(__dirname, '..', '..', 'src/public')
        }
      }
    })

    next()
  }
}

AssetsPlugin.register.attributes = {
  name: 'assets',
  version: '1.0.0'
}

module.exports = AssetsPlugin
