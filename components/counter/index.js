module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  init: function () {
    this.handleButtonClick()
  },

  getInitialState: function (input) {
    return {
      buttonClickCount: input.buttonClickCount || 0
    }
  },

  handleButtonClick: function () {
    this.setState('buttonClickCount', this.state.buttonClickCount + 1);
  }
});
