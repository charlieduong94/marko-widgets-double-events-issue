function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __browser_json = require.resolve("./browser.json"),
      __loadTag = __helpers.t,
      lasso_page_tag = __loadTag(require("lasso/taglib/config-tag")),
      lasso_head_tag = __loadTag(require("lasso/taglib/head-tag")),
      lasso_body_tag = __loadTag(require("lasso/taglib/body-tag"));

  return function render(data, out) {
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

    out.w("<browser-refresh enabled></browser-refresh></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
