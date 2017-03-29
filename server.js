require('require-self-ref')
require('marko/node-require').install()
require('lasso/node-require-no-op').enable('.css')

require('marko/browser-refresh').enable()
require('lasso/browser-refresh').enable('*.marko *.css')

const express = require('express')
const serveStatic = require('serve-static')
const lasso = require('lasso')

const OUTPUT_DIR = 'static'

lassoConfig = {
  plugins: [ 'lasso-marko' ],
  outputDir: OUTPUT_DIR,
  bundlingEnabled: true,
  fingerprintsEnabled: false,
  minify: false
}

lasso.configure(lassoConfig)

let jsapiLasso = lasso.create(Object.assign({
  noConflict: 'api'
}, lassoConfig))

jsapiLasso.lassoPage({
  name: 'jsapi',
  dependencies: [
    { type: 'require', path: './loadCounter.js', run: true, wait: false }
  ]
}, (err) => {
  const app = express()

  // api will be on /static/jsapi.js
  app.use('/static', serveStatic(OUTPUT_DIR))

  app.get('/', require('~/pages/index'))

  app.listen(8080, () => {
    console.log('Server started on port 8080')
    if (process.send) {
      process.send('online')
    }
  })
})
