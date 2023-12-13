import { defineConfig } from 'vite';
import { sharedViteConfig } from '../vite.config.shared';

export default defineConfig({
  ...sharedViteConfig,
  build: {
    sourcemap: sharedViteConfig.build.sourcemap,
    rollupOptions: sharedViteConfig.build.rollupOptions,
    lib: sharedViteConfig.build.lib,
    outDir: `${sharedViteConfig.build.outDir}/bundled`,
    emptyOutDir: sharedViteConfig.build.emptyOutDir,
  },
});
