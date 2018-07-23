module.exports = {
  plugins: ["prettier"],

  env: {
    browser: true,
    es6: true
  },

  parser: "babel-eslint",

  extends: ["prettier", "prettier/react"],

  globals: {
    global: true,
    process: true,
    module: true
  },

  rules: {
    "prettier/prettier": ["error"]
  }
};
