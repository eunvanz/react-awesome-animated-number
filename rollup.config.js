/* global process */

import pkg from "./package.json";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const extensions = [".js", ".jsx", ".ts", ".tsx", ".scss"];

export default [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.module,
        sourcemap: true,
        format: "es",
      },
      {
        file: pkg.main,
        sourcemap: true,
        format: "cjs",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        extract: true,
        sourceMap: true,
        use: ["sass"],
      }),
      resolve({ extensions }),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        extensions,
        include: "src/**/*",
        babelHelpers: "runtime",
      }),
      peerDepsExternal(),
    ],
    external: [...Object.keys(pkg.dependencies), /@babel\/runtime/],
  },
];
