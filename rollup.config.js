import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

const isDev = process.env.ENVIRONMENT === 'dev';
const fileName = isDev ? 'bundle.js' : 'bundle.min.js';

export default {
  input: 'src/index.js',
  name: 'bundle',
  output: {
    file: `dist/${fileName}`,
    format: 'iife',
  },
  plugins: [
    eslint(),
    resolve(),
    babel(),
    !isDev && uglify(),
  ],
};
