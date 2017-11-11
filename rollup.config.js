import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import includePaths from 'rollup-plugin-includepaths';

const isDev = process.env.ENVIRONMENT === 'dev';
const fileName = isDev ? 'bundle.js' : 'bundle.min.js';
const includePathOptions = {
  paths: ['src'],
  extensions: ['.js'],
};

export default {
  input: 'src/index.js',
  name: 'bundle',
  output: {
    file: `dist/${fileName}`,
    format: 'iife',
  },
  plugins: [
    includePaths(includePathOptions),
    eslint(),
    resolve(),
    babel(),
    !isDev && uglify(),
  ],
};
