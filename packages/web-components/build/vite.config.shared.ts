import path from 'path';
import dts from 'vite-plugin-dts';
import type { LibraryFormats } from 'vite';
import { name as pkgName, version } from '../package.json';

const libraryFormat: LibraryFormats[] = ['es', 'cjs'];

// eslint-disable-next-line import/prefer-default-export
export const sharedViteConfig = {
  resolve: {
    alias: [
      {
        find: /@keisha\/design-system-icons-web\/(.*)/,
        replacement: `${path.resolve(
          __dirname,
          '../../icons-web/src/lib/icons',
        )}/$1/$1`,
      },
      {
        find: '@keisha/design-system-tokens',
        replacement: path.resolve(__dirname, '../../../dist/packages/tokens'),
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
    rollupOptions: {
      output: {
        entryFileNames: '[format]/[name].js',
        chunkFileNames: '[format]/[name].[hash].js',
      },
    },
    lib: {
      entry: {
        index: path.resolve(__dirname, '../src/index.ts'),
        'segmented-control-item': path.resolve(
          __dirname,
          '../src/lib/components/segmented-control-item/segmented-control-item.ts',
        ),
        'segmented-control': path.resolve(
          __dirname,
          '../src/lib/components/segmented-control/segmented-control.ts',
        ),
        'footer-contact-link': path.resolve(
          __dirname,
          '../src/lib/components/footer-contact-link/footer-contact-link.ts',
        ),
        'phone-number-input': path.resolve(
          __dirname,
          '../src/lib/components/phone-number-input/phone-number-input.ts',
        ),
        'loading-page': path.resolve(
          __dirname,
          '../src/lib/components/loading-page/loading-page.ts',
        ),
        'logout-page': path.resolve(
          __dirname,
          '../src/lib/components/logout-page/logout-page.ts',
        ),
        'error-page': path.resolve(
          __dirname,
          '../src/lib/components/error-page/error-page.ts',
        ),
        'date-picker-input': path.resolve(
          __dirname,
          '../src/lib/components/date-picker-input/date-picker-input.ts',
        ),
        'secondary-navigation-link': path.resolve(
          __dirname,
          '../src/lib/components/secondary-navigation-link/secondary-navigation-link.ts',
        ),
        'show-more': path.resolve(
          __dirname,
          '../src/lib/components/show-more/show-more.ts',
        ),
        'session-timer-countdown': path.resolve(
          __dirname,
          '../src/lib/components/session-timer-countdown/session-timer-countdown.ts',
        ),
        'session-timer': path.resolve(
          __dirname,
          '../src/lib/components/session-timer/session-timer.ts',
        ),
        switch: path.resolve(
          __dirname,
          '../src/lib/components/switch/switch.ts',
        ),
        'status-indicator': path.resolve(
          __dirname,
          '../src/lib/components/status-indicator/status-indicator.ts',
        ),
        'data-table-input-column': path.resolve(
          __dirname,
          '../src/lib/components/data-table-input-column/data-table-input-column.ts',
        ),
        'secondary-navigation-level-two': path.resolve(
          __dirname,
          '../src/lib/components/secondary-navigation-level-two/secondary-navigation-level-two.ts',
        ),
        'secondary-navigation-level-one': path.resolve(
          __dirname,
          '../src/lib/components/secondary-navigation-level-one/secondary-navigation-level-one.ts',
        ),
        'secondary-navigation': path.resolve(
          __dirname,
          '../src/lib/components/secondary-navigation/secondary-navigation.ts',
        ),
        'footnote-link': path.resolve(
          __dirname,
          '../src/lib/components/footnote-link/footnote-link.ts',
        ),
        tooltip: path.resolve(
          __dirname,
          '../src/lib/components/tooltip/tooltip.ts',
        ),
        'action-menu-item': path.resolve(
          __dirname,
          '../src/lib/components/action-menu-item/action-menu-item.ts',
        ),
        'action-menu': path.resolve(
          __dirname,
          '../src/lib/components/action-menu/action-menu.ts',
        ),
        'data-table-rows': path.resolve(
          __dirname,
          '../src/lib/components/data-table-rows/data-table-rows.ts',
        ),
        'data-table-columns': path.resolve(
          __dirname,
          '../src/lib/components/data-table-columns/data-table-columns.ts',
        ),
        'data-table-row': path.resolve(
          __dirname,
          '../src/lib/components/data-table-row/data-table-row.ts',
        ),
        'data-table-cell': path.resolve(
          __dirname,
          '../src/lib/components/data-table-cell/data-table-cell.ts',
        ),
        'data-table-column': path.resolve(
          __dirname,
          '../src/lib/components/data-table-column/data-table-column.ts',
        ),
        'data-table': path.resolve(
          __dirname,
          '../src/lib/components/data-table/data-table.ts',
        ),
        'skeleton-loader': path.resolve(
          __dirname,
          '../src/lib/components/skeleton-loader/skeleton-loader.ts',
        ),
        sidebar: path.resolve(
          __dirname,
          '../src/lib/components/sidebar/sidebar.ts',
        ),
        modal: path.resolve(__dirname, '../src/lib/components/modal/modal.ts'),
        'radio-group': path.resolve(
          __dirname,
          '../src/lib/components/radio-group/radio-group.ts',
        ),
        radio: path.resolve(__dirname, '../src/lib/components/radio/radio.ts'),
        alert: path.resolve(__dirname, '../src/lib/components/alert/alert.ts'),
        'file-upload': path.resolve(
          __dirname,
          '../src/lib/components/file-upload/file-upload.ts',
        ),
        'date-picker': path.resolve(
          __dirname,
          '../src/lib/components/date-picker/date-picker.ts',
        ),
        logo: path.resolve(__dirname, '../src/lib/components/logo/logo.ts'),
        'text-area': path.resolve(
          __dirname,
          '../src/lib/components/text-area/text-area.ts',
        ),
        'text-input': path.resolve(
          __dirname,
          '../src/lib/components/text-input/text-input.ts',
        ),
        'linelength-container': path.resolve(
          __dirname,
          '../src/lib/components/linelength-container/linelength-container.ts',
        ),
        decorator: path.resolve(
          __dirname,
          '../src/lib/components/decorator/decorator.ts',
        ),
        'pagination-item': path.resolve(
          __dirname,
          '../src/lib/components/pagination-item/pagination-item.ts',
        ),
        select: path.resolve(
          __dirname,
          '../src/lib/components/select/select.ts',
        ),
        pagination: path.resolve(
          __dirname,
          '../src/lib/components/pagination/pagination.ts',
        ),
        'footer-nav-item': path.resolve(
          __dirname,
          '../src/lib/components/footer-nav-item/footer-nav-item.ts',
        ),
        'footer-nav': path.resolve(
          __dirname,
          '../src/lib/components/footer-nav/footer-nav.ts',
        ),
        'support-heading': path.resolve(
          __dirname,
          '../src/lib/components/support-heading/support-heading.ts',
        ),
        'primary-navigation-dropdown-link': path.resolve(
          __dirname,
          '../src/lib/components/primary-navigation-dropdown-link/primary-navigation-dropdown-link.ts',
        ),
        'primary-navigation-utility-menu-item': path.resolve(
          __dirname,
          '../src/lib/components/primary-navigation-utility-menu-item/primary-navigation-utility-menu-item.ts',
        ),
        'primary-navigation-utility-menu': path.resolve(
          __dirname,
          '../src/lib/components/primary-navigation-utility-menu/primary-navigation-utility-menu.ts',
        ),
        breadcrumbs: path.resolve(
          __dirname,
          '../src/lib/components/breadcrumbs/breadcrumbs.ts',
        ),
        'breadcrumbs-item': path.resolve(
          __dirname,
          '../src/lib/components/breadcrumbs-item/breadcrumbs-item.ts',
        ),
        checkbox: path.resolve(
          __dirname,
          '../src/lib/components/checkbox/checkbox.ts',
        ),
        card: path.resolve(__dirname, '../src/lib/components/card/card'),
        'list-item': path.resolve(
          __dirname,
          '../src/lib/components/list-item/list-item.ts',
        ),
        list: path.resolve(__dirname, '../src/lib/components/list/list.ts'),
        table: path.resolve(__dirname, '../src/lib/components/table/table.ts'),
        tag: path.resolve(__dirname, '../src/lib/components/tag/tag.ts'),
        'box-button': path.resolve(
          __dirname,
          '../src/lib/components/box-button/box-button.ts',
        ),
        'feature-block': path.resolve(
          __dirname,
          '../src/lib/components/feature-block/feature-block.ts',
        ),
        'footnote-item': path.resolve(
          __dirname,
          '../src/lib/components/footnote-item/footnote-item.ts',
        ),
        footnote: path.resolve(
          __dirname,
          '../src/lib/components/footnote/footnote.ts',
        ),
        collapsible: path.resolve(
          __dirname,
          '../src/lib/components/collapsible/collapsible.ts',
        ),
        avatar: path.resolve(
          __dirname,
          '../src/lib/components/avatar/avatar.ts',
        ),
        'text-passage': path.resolve(
          __dirname,
          '../src/lib/components/text-passage/text-passage.ts',
        ),
        band: path.resolve(__dirname, '../src/lib/components/band/band.ts'),
        button: path.resolve(
          __dirname,
          '../src/lib/components/button/button.ts',
        ),
        footer: path.resolve(
          __dirname,
          '../src/lib/components/footer/footer.ts',
        ),
        heading: path.resolve(
          __dirname,
          '../src/lib/components/heading/heading.ts',
        ),
        hr: path.resolve(__dirname, '../src/lib/components/hr/hr.ts'),
        link: path.resolve(__dirname, '../src/lib/components/link/link.ts'),
        'video-player': path.resolve(
          __dirname,
          '../src/lib/components/video-player/video-player.ts',
        ),
        'primary-navigation-main-menu': path.resolve(
          __dirname,
          '../src/lib/components/primary-navigation-main-menu/primary-navigation-main-menu.ts',
        ),
        'primary-navigation-main-menu-item': path.resolve(
          __dirname,
          '../src/lib/components/primary-navigation-main-menu-item/primary-navigation-main-menu-item.ts',
        ),
        'primary-navigation-container': path.resolve(
          __dirname,
          '../src/lib/components/primary-navigation-container/primary-navigation-container.ts',
        ),
        'primary-navigation': path.resolve(
          __dirname,
          '../src/lib/components/primary-navigation/primary-navigation.ts',
        ),
        'step-indicator': path.resolve(
          __dirname,
          '../src/lib/components/step-indicator/step-indicator.ts',
        ),
        'step-indicator-item': path.resolve(
          __dirname,
          '../src/lib/components/step-indicator-item/step-indicator-item.ts',
        ),
        grid: path.resolve(__dirname, '../src/lib/components/grid/grid.ts'),
        'grid-item': path.resolve(
          __dirname,
          '../src/lib/components/grid-item/grid-item.ts',
        ),
        'layout-container': path.resolve(
          __dirname,
          '../src/lib/components/layout-container/layout-container.ts',
        ),
      },
      formats: libraryFormat,
    },
    outDir: './dist/packages/web-components',
    emptyOutDir: true,
  },
  define: {
    pkgJson: { name: pkgName, version },
  },
  plugins: [
    dts({
      aliasesExclude: ['@keisha/design-system-icons-web'],
      insertTypesEntry: false,
      tsconfigPath: 'tsconfig.componentsbuild.json',
      copyDtsFiles: true,
      entryRoot: 'packages/web-components/src',
    }),
  ],
};
