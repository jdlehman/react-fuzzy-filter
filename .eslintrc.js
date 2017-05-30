module.exports = {
  plugins: ['prettier'],

  extends: [
    'panoply',
    'panoply/browser',
    'panoply/mocha',
    'panoply/react',
    'prettier',
    'prettier/react'
  ],

  globals: {
    global: true,
    process: true,
    module: true
  },

  rules: {
    'prettier/prettier': ['error', { singleQuote: true }]
  }
};
