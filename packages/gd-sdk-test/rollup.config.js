import typescript from 'rollup-plugin-typescript2';
import {nodeResolve}  from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import path from 'path';
// import pkg from './package.json';

// const external = [
//   ...Object.keys(pkg.dependencies || {}),
//   ...Object.keys(pkg.peerDependencies || {}),
// ]

const plugins = [
  eslint(),
  json({
    compact: true
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true,
    preferBuiltins: false,
    moduleDirectories: ['node_modules', 'src', 'dist'],
    extensions: ['.mjs', '.js', '.json', '.node'],

  }),
  commonjs(),
  typescript({ 
    tsconfig: './tsconfig.dist.json',
    useTsconfigDeclarationDir: false,
    clean: true,
  }),
]

export default {
  input: {
    index: 'src/index.ts',
    "core/apollo": 'src/core/apollo.ts',
    "core/staking": 'src/core/staking.ts'
  },
  output: [
    {
      dir: 'dist',
      chunkFileNames: 'chunks/[name].js',
      // entryFileNames: '[name].js',
      // file: `core/${path.basename(input)}`,
      format: 'esm',
    },
  ],
  context: "window",
  plugins: plugins
};