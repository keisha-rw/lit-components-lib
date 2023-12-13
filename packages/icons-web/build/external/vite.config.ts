import { defineConfig } from 'vite';
import { sharedViteConfig } from '../vite.config.shared';

export default defineConfig({
  ...sharedViteConfig,
  build: {
    sourcemap: sharedViteConfig.build.sourcemap,
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: [
        'lit',
        'lit/decorators.js',
        'lit/directives/class-map.js',
        'lit/directives/if-defined.js',
      ],
      output: sharedViteConfig.build.rollupOptions.output,
    },
    lib: sharedViteConfig.build.lib,
    outDir: sharedViteConfig.build.outDir,
    emptyOutDir: sharedViteConfig.build.emptyOutDir,
  },
});
