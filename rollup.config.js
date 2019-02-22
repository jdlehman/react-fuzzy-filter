// adapted from formik: https://github.com/jaredpalmer/formik/blob/master/rollup.config.js
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import sourceMaps from "rollup-plugin-sourcemaps";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import pkg from "./package.json";

const input = "./compiled/index.js";
const external = id => !id.startsWith(".") && !id.startsWith("/");
const babelOptions = {
  exclude: /node_modules/,
  plugins: ["annotate-pure-calls", "dev-expression"],
};

const buildUmd = ({ env }) => ({
  input,
  external: ["react", "react-native"],
  output: {
    name: "ReactFuzzyFilter",
    format: "umd",
    sourcemap: true,
    file: `./dist/react-fuzzy-filter.umd.${env}.js`,
    exports: "named",
    globals: {
      react: "React",
      "react-native": "ReactNative",
    },
  },

  plugins: [
    resolve(),
    babel(babelOptions),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env),
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        "node_modules/prop-types/index.js": [
          "object",
          "oneOfType",
          "string",
          "node",
          "func",
          "bool",
          "element",
        ],
      },
    }),
    sourceMaps(),
    sizeSnapshot(),
    env === "production" &&
      terser({
        sourcemap: true,
        output: { comments: false },
        compress: {
          keep_infinity: true,
          pure_getters: true,
        },
        warnings: true,
        ecma: 5,
        toplevel: false,
      }),
  ],
});

const buildCjs = ({ env }) => ({
  input,
  external,
  output: {
    file: `./dist/${pkg.name}.cjs.${env}.js`,
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env),
    }),
    sourceMaps(),
    sizeSnapshot(),
    env === "production" &&
      terser({
        sourcemap: true,
        output: { comments: false },
        compress: {
          keep_infinity: true,
          pure_getters: true,
        },
        warnings: true,
        ecma: 5,
        // Compress and/or mangle variables in top level scope.
        // @see https://github.com/terser-js/terser
        toplevel: true,
      }),
  ],
});

export default [
  buildUmd({ env: "production" }),
  buildUmd({ env: "development" }),
  buildCjs({ env: "production" }),
  buildCjs({ env: "development" }),
  {
    input,
    external,
    output: [
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), babel(babelOptions), sizeSnapshot(), sourceMaps()],
  },
];
