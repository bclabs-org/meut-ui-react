import { babel } from '@rollup/plugin-babel';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import nodeResolve from '@rollup/plugin-node-resolve';
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
        format: "es",
        sourcemap: true,
    },
    plugins: [
        postcss({
            extensions: ['.css'],
            minimize: true,
            inject: 'top',
            extract: true,
            sourceMap: false,
            use: ['sass'],
            modules: false
        }),
        babel({
            babelHelpers: "runtime",
            exclude: "node_modules/**",
            extensions,
        }),
        terser(),
        typescript({ useTsconfigDeclarationDir: true }),
        nodeResolve({extensions}),
    ],
    external: ["react", "react-dom", "typescript", '@babel/runtime']
};