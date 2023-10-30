import { babel } from '@rollup/plugin-babel';
import { dirname, resolve } from 'path';
import image from '@rollup/plugin-image';

import { fileURLToPath } from 'url';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

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
  ],
  external: ['react', 'react-dom', 'typescript'],
};
