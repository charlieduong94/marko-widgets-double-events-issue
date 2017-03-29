console.log('loading counter component')

var CounterComponent = require('~/components/counter')

CounterComponent.renderSync().appendTo(document.body)
