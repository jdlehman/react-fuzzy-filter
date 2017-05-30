module.exports = {
  'src/**/*.js': ['prettier --write --single-quote', 'git add'],
  'test/**/*.js': ['prettier --write --single-quote', 'git add']
};
