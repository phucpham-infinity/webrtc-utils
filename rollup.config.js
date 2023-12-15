import dts from "rollup-plugin-dts";

const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [dts()],
    output: {
      dir: "./dist",
      entryFileNames: `index.d.ts`,
      format: "es",
    },
  }),
];
