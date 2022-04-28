// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import resolve  from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel';
import * as path from 'path'

// import pkg from './package.json';

// const external = [
//   ...Object.keys(pkg.dependencies || {}),
//   ...Object.keys(pkg.peerDependencies || {}),
// ]

export default {
  input: './src/index.tsx',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      name: "base-package",
      sourcemap: false,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDom',
        'native-base': 'native-base'
      }
    },
  ],
  plugins: [
    resolve(),
    typescript({ 
      tsconfig: './tsconfig.json', 
      exclude: 'node_modules/**',
      useTsconfigDeclarationDir: true
    }),
    terser(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        ["@babel/preset-flow"],
        ["@babel/preset-typescript"],
        ["@babel/preset-react"],
        ["module:metro-react-native-babel-preset"]
      ],
      plugins: [
        ["@babel/plugin-syntax-flow"],
        ["@babel/plugin-transform-flow-strip-types"],
        ["@babel/plugin-transform-runtime", {
          corejs: false,
          helpers: false,
          version: require('@babel/plugin-transform-runtime/package.json').version,
          regenator: true,
          useESModules: true,
          absoluteRuntime: path.dirname(require.resolve('@babel/runtime/package.json'))
        }]
      ]
    }),
  ],
  external: ['native-base', 'react', 'react-native']
};