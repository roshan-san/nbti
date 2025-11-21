import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['api/index.ts'], 
  outDir: 'dist/api',          
  format: ['esm'],                         // Node 20 ESM
  bundle: true,                            // bundle all imports into one file
  clean: true,                             // remove old builds before building
  sourcemap: true,                         // optional, useful for debugging
  splitting: false,                        // single JS file (serverless friendly)
});
