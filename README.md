# marko-widgets-double-events-issue

When using lasso-js with the `noConflict` option, marko widgets seems to be adding an extra set of listeners
for each handler function. So click handlers are getting performed twice.

Install dependencies with `npm install`, then use `node server.js` to start up the server.

Go to `localhost:8080` and click the button on the page to see the issue happen.


