import { babel } from '@rollup/plugin-babel';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";

const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const paths = {
    input: resolve(__dirname, "./src/index.ts"),
    file: resolve(__dirname, "./dist/bundle.js"),
};

const config =  {
    input: paths.input,
    output: {
        file: paths.file,
        format: "es",
        sourcemap: true,
    },
    plugins: [
        nodeResolve({extensions}),
        babel({
            babelHelpers: "runtime",
            exclude: "node_modules/**",
            extensions
        }),
        commonjs({include: /node_modules/}),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss({
            extract: true,
            modules: true,
            sourceMap: false,
            use: ['sass'],
        }),
    ],
    external: ["react", "react-dom", "typescript", '@babel/runtime']
};

export default config;