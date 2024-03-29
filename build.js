import {build} from 'esbuild';

const config = {
  entryPoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  bundle: true
}

Promise.allSettled([
  build({ ...config, format: 'iife', globalName: 'ueid', entryNames: 'ueid'}),
  build({ ...config, format: 'cjs', outExtension: {'.js': '.cjs'}}),
  build({ ...config, format: 'esm'})
])
