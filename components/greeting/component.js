function loadJavascriptApi () {
  var scriptEl = document.createElement('script')
  scriptEl.type = 'text/javascript'
  scriptEl.src= '/static/jsapi.js'
  document.body.appendChild(scriptEl)
  scriptEl.addEventListener('load', () => {
    console.log('component has loaded')
  })
}

module.exports = {
  onInput: function (input) {
    this.state = {
      buttonLoaded: input.buttonLoaded
    }
  },

  handleLoadClick: function () {
    loadJavascriptApi()
    this.setState('buttonLoaded', true)
  }
}
