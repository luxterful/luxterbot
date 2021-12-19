import ts from "rollup-plugin-ts";
export default [
  {
    input: "src/client/index.ts",
    output: {
      file: "dist/client.js",
      format: "esm",
    },
    external: ["axios"],
    plugins: [ts({ tsconfig: "./tsconfig.client.json" })],
  },
  // TODO: also bundle server
];
