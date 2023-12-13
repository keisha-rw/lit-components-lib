import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { name, version } from './package.json';

// const externals = [
//   'react',
//   '@keisha/design-system',
//   'lit',
//   'lit-html',
//   'lit-element',
//   'lit-html/private-ssr-support.js',
//   'lit-html/directive.js',
//   'lit-html/directive-helpers.js',
//   '@lit-labs/react',
//   '@keisha/design-system-icons-web',
//   '@lit-labs/ssr-react',
//   '@lit-labs/ssr-client',
//   '@lit-labs/ssr',
//   '@lit-labs/ssr-client/lit-element-hydrate-support.js',
//   '@lit-labs/ssr-react/enable-lit-ssr.js',
//   '@lit/reactive-element',
//   '@lit-labs/ssr-dom-shim',
//   '@lit/react',
// ];

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /@keisha\/design-system(?!.*(\/css|\/utils|-))/,
        replacement: '../../../../../../dist/packages/web-components/es',
      },
      {
        find: /@keisha\/design-system\/css\/(.*)/,
        replacement: path.resolve(
          __dirname,
          '../web-components/src/lib/components/$1',
        ),
      },
      {
        find: /@keisha\/design-system\/utils\/(.*)/,
        replacement: path.resolve(
          __dirname,
          '../web-components/src/lib/components/$1',
        ),
      },
      {
        find: '@keisha/design-system-icons-react',
        replacement: '../../../../../../dist/packages/icons-react/es',
      },
      {
        find: '@keisha/design-system-icons-web',
        replacement: path.resolve(
          __dirname,
          '../../dist/packages/icons-web/es',
        ),
      },
      {
        find: '@keisha/design-system-tokens',
        replacement: '../../../../../../dist/packages/tokens',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@keisha/design-system-tokens/tokens/themes/default/utilities/component' as *;`,
      },
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
    outDir: './dist/packages/react',
    emptyOutDir: true,
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: (id: string) => {
        if (
          id.match(
            /^@?lit.*$|^react$|^@keisha\/design-system$|^@keisha\/design-system-icons-web$|^@keisha\/design-system-icons-react$/g,
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
  define: {
    pkgJson: { name, version },
  },
  plugins: [
    dts({
      insertTypesEntry: false,
      aliasesExclude: [
        '@keisha/design-system',
        '@keisha/design-system-icons-react',
        '@keisha/design-system-icons-web',
      ],
      tsconfigPath: 'tsconfig.reactbuild.json',
      copyDtsFiles: true,
      entryRoot: 'packages/react/src',
    }),
    cssInjectedByJsPlugin(),
  ],
});
