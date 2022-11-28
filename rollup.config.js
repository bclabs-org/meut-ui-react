import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
//import typescript from '@rollup/plugin-typescript/types/index.d.ts';
import commonjs from '@rollup/plugin-commonjs';

// import typescript from "rollup-plugin-typescript2";


import postcss from 'rollup-plugin-postcss';
import typescript from "@rollup/plugin-typescript";

const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];
const config =  {
    input: "./src/index.js",
    output: {
        file: "./dist/bundle.js",
        format: "es",
        sourcemap: true,
    },
    plugins: [
        commonjs(),
        nodeResolve({extensions}),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            extensions
        }),
        typescript({tsconfig: './tsconfig.json'}),
        postcss({
            extract: false,
            modules: true,
            sourceMap: false,
            use: ['sass'],
        })
    ],
    external: ["react", "react-dom", "typescript"]
};

export default config;