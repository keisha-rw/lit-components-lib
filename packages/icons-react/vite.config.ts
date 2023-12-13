import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { name, version } from './package.json';

export default defineConfig({
  resolve: {
    alias: {
      '@keisha/design-system-icons-web':
        '../../../../../../dist/packages/icons-web/es',
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    outDir: './dist/packages/icons-react',
    emptyOutDir: true,
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: (id: string) => {
        if (
          id.match(
            /^@?lit.*$|^react$|^@keisha\/design-system$|^@keisha\/design-system-icons-web$/g,
          )
        ) {
          return true;
        }

        return false;
      },
      output: {
        entryFileNames: '[format]/[name].js',
        chunkFileNames: '[format]/[name].[hash].js',
      },
    },
  },
  esbuild: {
    minifyIdentifiers: false,
  },
  define: {
    pkgJson: { name, version },
  },
  plugins: [
    dts({
      insertTypesEntry: false,
      tsconfigPath: 'tsconfig.iconsreactbuild.json',
      copyDtsFiles: true,
      entryRoot: 'packages/icons-react/src',
    }),
  ],
});
