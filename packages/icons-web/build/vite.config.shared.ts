import path from 'path';
import dts from 'vite-plugin-dts';
import type { LibraryFormats } from 'vite';
import { name, version } from '../package.json';

const libraryFormat: LibraryFormats[] = ['es', 'cjs'];

// eslint-disable-next-line import/prefer-default-export
export const sharedViteConfig = {
  resolve: {
    alias: [
      {
        find: '@keisha/design-system-tokens',
        replacement: path.resolve(__dirname, '../../../dist/packages/tokens'),
      },
    ],
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
        'life-buoy': path.resolve(
          __dirname,
          '../src/lib/icons/life-buoy/life-buoy.ts',
        ),
        'log-out': path.resolve(
          __dirname,
          '../src/lib/icons/log-out/log-out.ts',
        ),
        'zoom-out': path.resolve(
          __dirname,
          '../src/lib/icons/zoom-out/zoom-out.ts',
        ),
        'zoom-in': path.resolve(
          __dirname,
          '../src/lib/icons/zoom-in/zoom-in.ts',
        ),
        users: path.resolve(__dirname, '../src/lib/icons/users/users.ts'),
        unlock: path.resolve(__dirname, '../src/lib/icons/unlock/unlock.ts'),
        'thumbs-down': path.resolve(
          __dirname,
          '../src/lib/icons/thumbs-down/thumbs-down.ts',
        ),
        'thumbs-up': path.resolve(
          __dirname,
          '../src/lib/icons/thumbs-up/thumbs-up.ts',
        ),
        'star-full': path.resolve(
          __dirname,
          '../src/lib/icons/star-full/star-full.ts',
        ),
        'star-half': path.resolve(
          __dirname,
          '../src/lib/icons/star-half/star-half.ts',
        ),
        star: path.resolve(__dirname, '../src/lib/icons/star/star.ts'),
        'shield-check': path.resolve(
          __dirname,
          '../src/lib/icons/shield-check/shield-check.ts',
        ),
        share: path.resolve(__dirname, '../src/lib/icons/share/share.ts'),
        settings: path.resolve(
          __dirname,
          '../src/lib/icons/settings/settings.ts',
        ),
        'refresh-ccw': path.resolve(
          __dirname,
          '../src/lib/icons/refresh-ccw/refresh-ccw.ts',
        ),
        'refresh-cw': path.resolve(
          __dirname,
          '../src/lib/icons/refresh-cw/refresh-cw.ts',
        ),
        wrench: path.resolve(__dirname, '../src/lib/icons/wrench/wrench.ts'),
        pin: path.resolve(__dirname, '../src/lib/icons/pin/pin.ts'),
        'pen-square': path.resolve(
          __dirname,
          '../src/lib/icons/pen-square/pen-square.ts',
        ),
        'pause-circle': path.resolve(
          __dirname,
          '../src/lib/icons/pause-circle/pause-circle.ts',
        ),
        'message-square': path.resolve(
          __dirname,
          '../src/lib/icons/message-square/message-square.ts',
        ),
        lock: path.resolve(__dirname, '../src/lib/icons/lock/lock.ts'),
        loader: path.resolve(__dirname, '../src/lib/icons/loader/loader.ts'),
        globe: path.resolve(__dirname, '../src/lib/icons/globe/globe.ts'),
        filter: path.resolve(__dirname, '../src/lib/icons/filter/filter.ts'),
        file: path.resolve(__dirname, '../src/lib/icons/file/file.ts'),
        'external-link': path.resolve(
          __dirname,
          '../src/lib/icons/external-link/external-link.ts',
        ),
        list: path.resolve(__dirname, '../src/lib/icons/list/list.ts'),
        'line-chart': path.resolve(
          __dirname,
          '../src/lib/icons/line-chart/line-chart.ts',
        ),
        home: path.resolve(__dirname, '../src/lib/icons/home/home.ts'),
        heart: path.resolve(__dirname, '../src/lib/icons/heart/heart.ts'),
        whatsapp: path.resolve(
          __dirname,
          '../src/lib/icons/whatsapp/whatsapp.ts',
        ),
        'play-circle': path.resolve(
          __dirname,
          '../src/lib/icons/play-circle/play-circle.ts',
        ),
        'corner-up-left': path.resolve(
          __dirname,
          '../src/lib/icons/corner-up-left/corner-up-left.ts',
        ),
        copy: path.resolve(__dirname, '../src/lib/icons/copy/copy.ts'),
        'check-circle': path.resolve(
          __dirname,
          '../src/lib/icons/check-circle/check-circle.ts',
        ),
        calculator: path.resolve(
          __dirname,
          '../src/lib/icons/calculator/calculator.ts',
        ),
        'alert-triangle': path.resolve(
          __dirname,
          '../src/lib/icons/alert-triangle/alert-triangle.ts',
        ),
        printer: path.resolve(__dirname, '../src/lib/icons/printer/printer.ts'),
        lightbulb: path.resolve(
          __dirname,
          '../src/lib/icons/lightbulb/lightbulb.ts',
        ),
        info: path.resolve(__dirname, '../src/lib/icons/info/info.ts'),
        instagram: path.resolve(
          __dirname,
          '../src/lib/icons/instagram/instagram.ts',
        ),
        paperclip: path.resolve(
          __dirname,
          '../src/lib/icons/paperclip/paperclip.ts',
        ),
        image: path.resolve(__dirname, '../src/lib/icons/image/image.ts'),
        'area-chart': path.resolve(
          __dirname,
          '../src/lib/icons/area-chart/area-chart.ts',
        ),
        search: path.resolve(__dirname, '../src/lib/icons/search/search.ts'),
        linkedin: path.resolve(
          __dirname,
          '../src/lib/icons/linkedin/linkedin.ts',
        ),
        youtube: path.resolve(__dirname, '../src/lib/icons/youtube/youtube.ts'),
        'bell-notification': path.resolve(
          __dirname,
          '../src/lib/icons/bell-notification/bell-notification.ts',
        ),
        minus: path.resolve(__dirname, '../src/lib/icons/minus/minus.ts'),
        plus: path.resolve(__dirname, '../src/lib/icons/plus/plus.ts'),
        'map-pin': path.resolve(
          __dirname,
          '../src/lib/icons/map-pin/map-pin.ts',
        ),
        phone: path.resolve(__dirname, '../src/lib/icons/phone/phone.ts'),
        'dollar-sign': path.resolve(
          __dirname,
          '../src/lib/icons/dollar-sign/dollar-sign.ts',
        ),
        sun: path.resolve(__dirname, '../src/lib/icons/sun/sun.ts'),
        flag: path.resolve(__dirname, '../src/lib/icons/flag/flag.ts'),
        sprout: path.resolve(__dirname, '../src/lib/icons/sprout/sprout.ts'),
        umbrella: path.resolve(
          __dirname,
          '../src/lib/icons/umbrella/umbrella.ts',
        ),
        shield: path.resolve(__dirname, '../src/lib/icons/shield/shield.ts'),
        bell: path.resolve(__dirname, '../src/lib/icons/bell/bell.ts'),
        download: path.resolve(
          __dirname,
          '../src/lib/icons/download/download.ts',
        ),
        upload: path.resolve(__dirname, '../src/lib/icons/upload/upload.ts'),
        'alert-circle': path.resolve(
          __dirname,
          '../src/lib/icons/alert-circle/alert-circle.ts',
        ),
        'eye-off': path.resolve(
          __dirname,
          '../src/lib/icons/eye-off/eye-off.ts',
        ),
        'more-horizontal': path.resolve(
          __dirname,
          '../src/lib/icons/more-horizontal/more-horizontal.ts',
        ),
        calendar: path.resolve(
          __dirname,
          '../src/lib/icons/calendar/calendar.ts',
        ),
        'arrow-down': path.resolve(
          __dirname,
          '../src/lib/icons/arrow-down/arrow-down.ts',
        ),
        'arrow-left': path.resolve(
          __dirname,
          '../src/lib/icons/arrow-left/arrow-left.ts',
        ),
        'arrow-right': path.resolve(
          __dirname,
          '../src/lib/icons/arrow-right/arrow-right.ts',
        ),
        'arrow-up': path.resolve(
          __dirname,
          '../src/lib/icons/arrow-up/arrow-up.ts',
        ),
        check: path.resolve(__dirname, '../src/lib/icons/check/check.ts'),
        'chevron-down': path.resolve(
          __dirname,
          '../src/lib/icons/chevron-down/chevron-down.ts',
        ),
        'chevron-left': path.resolve(
          __dirname,
          '../src/lib/icons/chevron-left/chevron-left.ts',
        ),
        'chevron-right': path.resolve(
          __dirname,
          '../src/lib/icons/chevron-right/chevron-right.ts',
        ),
        'chevron-up': path.resolve(
          __dirname,
          '../src/lib/icons/chevron-up/chevron-up.ts',
        ),
        'chevrons-left': path.resolve(
          __dirname,
          '../src/lib/icons/chevrons-left/chevrons-left.ts',
        ),
        'chevrons-right': path.resolve(
          __dirname,
          '../src/lib/icons/chevrons-right/chevrons-right.ts',
        ),
        clock: path.resolve(__dirname, '../src/lib/icons/clock/clock.ts'),
        edit: path.resolve(__dirname, '../src/lib/icons/edit/edit.ts'),
        eye: path.resolve(__dirname, '../src/lib/icons/eye/eye.ts'),
        'help-circle': path.resolve(
          __dirname,
          '../src/lib/icons/help-circle/help-circle.ts',
        ),
        facebook: path.resolve(
          __dirname,
          '../src/lib/icons/facebook/facebook.ts',
        ),
        iconGallery: path.resolve(
          __dirname,
          '../src/lib/icons/iconGallery/iconGallery.ts',
        ),
        mail: path.resolve(__dirname, '../src/lib/icons/mail/mail.ts'),
        menu: path.resolve(__dirname, '../src/lib/icons/menu/menu.ts'),
        trash: path.resolve(__dirname, '../src/lib/icons/trash/trash.ts'),
        twitter: path.resolve(__dirname, '../src/lib/icons/twitter/twitter.ts'),
        user: path.resolve(__dirname, '../src/lib/icons/user/user.ts'),
        x: path.resolve(__dirname, '../src/lib/icons/x/x.ts'),
      },
      formats: libraryFormat,
    },
    outDir: './dist/packages/icons-web',
    emptyOutDir: true,
  },
  define: {
    pkgJson: { name, version },
  },
  plugins: [
    dts({
      insertTypesEntry: false,
      tsconfigPath: 'tsconfig.iconswebbuild.json',
      copyDtsFiles: true,
      entryRoot: 'packages/icons-web/src',
    }),
  ],
};
