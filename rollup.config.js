import {nodeResolve} from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default [
  // common js
  {
    input: './esm/index.js',
    plugins: [
      nodeResolve(),
      terser()
    ],
    
    output: {
      exports: 'named',
      file: './cjs/index.js',
      format: 'cjs'
    }
  },
  // UMD (node and browser)
  {
    input: './esm/index.js',
    plugins: [
      nodeResolve()
    ],
    output: {
      exports: 'named',
      file: './index.js',
      format: 'umd',
      name: 'createDeepTreeWalkerIterator'
    }
  },
  // UMD minify(node and browser)
  {
    input: './esm/index.js',
    plugins: [
      nodeResolve(),
      terser()
    ],
    
    output: {
      exports: 'named',
      file: './min.js',
      format: 'umd',
      name: 'createDeepTreeWalkerIterator'
    }
  },
];
