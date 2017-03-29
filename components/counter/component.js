module.exports = {
  onInput: function (input) {
    this.state = {
      buttonClickCount: input.buttonClickCount || 0
    }
  },

  handleButtonClick: function () {
    this.setState('buttonClickCount', this.state.buttonClickCount + 1);
  }
}
