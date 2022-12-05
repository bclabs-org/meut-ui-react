import { babel } from '@rollup/plugin-babel';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import postcss from 'rollup-plugin-postcss';
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const paths = {
    input: resolve(__dirname, "./src/components/index.ts"),
    file: resolve(__dirname, "./dist/bundle.js"),
};

export default  {
    input: paths.input,
    output: {
        file: paths.file,
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        postcss({
            config: {
                path: "./postcss.config.cjs",
            },
            extensions: [".css"],
            minimize: true,
            use: ["sass"],
            inject: {
                insertAt: "top",
            },
        }),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            extensions,
        }),
        commonjs({ include: "node_modules/**" }),
        terser(),
        typescript({ useTsconfigDeclarationDir: true }),
        nodeResolve({extensions}),
    ],
    external: ["react", "react-dom", "typescript"]
};