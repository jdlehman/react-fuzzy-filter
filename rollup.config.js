import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  external: ["react"],
  plugins: [
    nodeResolve(),
    commonjs({
      include: ["node_modules/**"]
    }),
    babel({
      babelrc: false,
      presets: ["es2015-rollup", "stage-0", "react"]
    }),
    replace({
      "process.env.NODE_DEBUG": false,
      "process.env.NODE_ENV": '"production"'
    })
  ],
  output: [
    {
      name: "ReactFuzzyFilter",
      format: "umd",
      file: "dist/react-fuzzy-filter.umd.js",
      globals: {
        react: "React"
      }
    },
    {
      name: "ReactFuzzyFilter",
      format: "iife",
      file: "dist/react-fuzzy-filter.browser.js",
      globals: {
        react: "React"
      }
    },
    {
      format: "amd",
      file: "dist/react-fuzzy-filter.amd.js",
      globals: {
        react: "React"
      }
    },
    {
      format: "cjs",
      file: "dist/react-fuzzy-filter.cjs.js",
      globals: {
        react: "React"
      }
    },
    {
      format: "es",
      file: "dist/react-fuzzy-filter.es-modules.js",
      globals: {
        react: "React"
      }
    }
  ]
};
