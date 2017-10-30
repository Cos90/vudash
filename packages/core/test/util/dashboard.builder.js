'use strict'

const WidgetBuilder = require('./widget.builder')

class DashboardBuilder {

  constructor () {
    this.overrides = {
      widgets: []
    }
  }

  withName (name = 'Some Dashboard') {
    this.overrides.name = name
    return this
  }

  addDatasource (moduleName, options) {
    this.overrides.datasources = this.datasources || {}
    this.overrides.datasources[moduleName] = {
      module: moduleName,
      options
    }
    return this
  }

  addWidget (widget = WidgetBuilder.create().build()) {
    this.overrides.widgets.push(widget)
    return this
  }

  build () {
    return Object.assign({}, {
      layout: {
        rows: 4,
        columns: 5
      }
    }, this.overrides)
  }
}

module.exports = {
  create: () => { return new DashboardBuilder() }
}
