import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import nodeResolve from '@rollup/plugin-node-resolve';
import path from 'path';

const extensions = ['.ts', '.js'];

export default [
  {
    input: path.join(__dirname,'/src/index.ts'),
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
      nodeResolve({
        extensions
      }),
      typescript({
        // eslint-disable-next-line global-require
        typescript: require('typescript'),
        objectHashIgnoreUnknownHack: false
      }),
    ],
  },
];
