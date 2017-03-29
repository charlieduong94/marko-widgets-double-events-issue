function loadJavascriptApi () {
  var scriptEl = document.createElement('script')
  scriptEl.type = 'text/javascript'
  scriptEl.src= '/static/jsapi.js'
  document.body.appendChild(scriptEl)
}

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function (input) {
    return {
      buttonLoaded: input.buttonLoaded
    }
  },

  handleLoadClick: function () {
    loadJavascriptApi()
    this.setState('buttonLoaded', true)
  }
})
