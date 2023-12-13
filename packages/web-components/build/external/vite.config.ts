import { defineConfig } from 'vite';
import { sharedViteConfig } from '../vite.config.shared';

export default defineConfig({
  ...sharedViteConfig,
  build: {
    sourcemap: sharedViteConfig.build.sourcemap,
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      // TODO: make this a func to match react?
      external: [
        'lit',
        'lit-html',
        'lit/decorators.js',
        'lit/directives/choose.js',
        'lit/directives/class-map.js',
        'lit/directives/unsafe-html.js',
        'lit/directives/if-defined.js',
        '@lit/localize',
        '@lit-labs/ssr-client',
        '@lit-labs/ssr-client/lit-element-hydrate-support.js',
        '@lit/reactive-element',
        '@lit-labs/ssr-dom-shim',
      ],
      output: sharedViteConfig.build.rollupOptions.output,
    },
    lib: sharedViteConfig.build.lib,
    outDir: sharedViteConfig.build.outDir,
    emptyOutDir: sharedViteConfig.build.emptyOutDir,
  },
});
