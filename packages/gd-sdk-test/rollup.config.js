// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser';
import resolve  from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

// import pkg from './package.json';

// const external = [
//   ...Object.keys(pkg.dependencies || {}),
//   ...Object.keys(pkg.peerDependencies || {}),
// ]

export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    resolve(),
    json({
      compact: true
    }),
    typescript({ 
      tsconfig: './tsconfig.json', 
      exclude: 'node_modules/**',
      useTsconfigDeclarationDir: true
    }),
    terser()
  ]
};