import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  plugins: [
    nodeResolve({
      skip: ['react']
    }),
    commonjs({
      include: [
        'node_modules/rxjs/**',
        'node_modules/debounce/**',
        'node_modules/fuse.js/**'
      ]
    }),
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-0', 'react']
    }),
    replace({
      'process.env.NODE_DEBUG': false,
      'process.env.NODE_ENV': 'production'
    })
  ],
  globals: {
    react: 'React'
  },
  moduleName: 'ReactFuzzyFilter',
  moduleId: 'react-fuzzy-filter',
  targets: [
    {format: 'umd', dest: 'dist/react-fuzzy-filter.umd.js'},
    {format: 'iife', dest: 'dist/react-fuzzy-filter.browser.js'},
    {format: 'amd', dest: 'dist/react-fuzzy-filter.amd.js'},
    {format: 'cjs', dest: 'dist/react-fuzzy-filter.cjs.js'},
    {format: 'es', dest: 'dist/react-fuzzy-filter.es-modules.js'}
  ]
};
