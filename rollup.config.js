import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';

import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import eslint from '@rollup/plugin-eslint';

const extensions = ['js', 'jsx', 'ts', 'tsx', 'mjs'];

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const paths = {
  input: resolve(dirName, './src/components/index.ts'),
  file: resolve(dirName, './dist/bundle.js'),
};

export default {
  input: paths.input,
  output: {
    file: paths.file,
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      config: {
        path: './postcss.config.cjs',
      },
      extensions: ['.css'],
      minimize: true,
      use: ['sass'],
      inject: {
        insertAt: 'top',
      },
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions,
    }),
    commonjs({ include: 'node_modules/**' }),
    nodeResolve({ extensions }),
    terser(),
    image(),
    eslint({
      fix: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      ignore: ['lib/**'],
    }),
  ],
  external: ['react', 'react-dom', 'typescript'],
};
