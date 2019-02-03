"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./react-fuzzy-filter.cjs.production.js");
} else {
  module.exports = require("./react-fuzzy-filter.cjs.development.js");
}
