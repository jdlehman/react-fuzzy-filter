import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    nodeResolve(),
    commonjs({
      include: ['node_modules/**']
    }),
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-0', 'react']
    }),
    replace({
      'process.env.NODE_DEBUG': false,
      'process.env.NODE_ENV': '"production"'
    })
  ],
  globals: {
    react: 'React'
  },
  name: 'ReactFuzzyFilter',
  moduleId: 'react-fuzzy-filter',
  output: [
    { format: 'umd', file: 'dist/react-fuzzy-filter.umd.js' },
    { format: 'iife', file: 'dist/react-fuzzy-filter.browser.js' },
    { format: 'amd', file: 'dist/react-fuzzy-filter.amd.js' },
    { format: 'cjs', file: 'dist/react-fuzzy-filter.cjs.js' },
    { format: 'es', file: 'dist/react-fuzzy-filter.es-modules.js' }
  ]
};
