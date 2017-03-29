// Compiled using marko@4.2.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    __browser_json = require.resolve("./browser.json"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("lasso/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("lasso/taglib/head-tag")),
    lasso_body_tag = marko_loadTag(require("lasso/taglib/body-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag")),
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html>");

  lasso_page_tag({
      packagePath: __browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<html><head><title>Duplicate widgets demo</title>");

  lasso_head_tag({}, out);

  out.w("</head><body>");

  lasso_body_tag({}, out);

  await_reorderer_tag({}, out);

  init_components_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "lasso/taglib/config-tag",
      "lasso/taglib/head-tag",
      "lasso/taglib/body-tag",
      "marko/taglibs/async/await-reorderer-tag",
      "marko/components/taglib/init-components-tag"
    ]
  };
