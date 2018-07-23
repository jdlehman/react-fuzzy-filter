module.exports = {
  "src/**/*.js": ["prettier --write", "git add"],
  "test/**/*.js": ["prettier --write", "git add"]
};
