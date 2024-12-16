import escapeHtml from "escape-html";
import jsStringEscape from "js-string-escape";

export const escapeStrings = (req, res, next) => {
  const escapeObject = (obj) => {
    if (obj && typeof obj === "object") {
      for (let key in obj) {
        if (typeof obj[key] === "string") {
          obj[key] = escapeHtml(jsStringEscape(obj[key]));
        } else if (typeof obj[key] === "object") {
          obj[key] = escapeObject(obj[key]);
        }
      }
    }
    return obj;
  };

  if (req.body) {
    req.body = escapeObject(req.body);
  }

  if (req.params) {
    req.params = escapeObject(req.params);
  }

  if (req.query) {
    req.query = escapeObject(req.query);
  }

  next();
};
