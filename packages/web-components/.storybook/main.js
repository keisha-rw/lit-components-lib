const rootMain = require('../../../.storybook/main');
const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  ...rootMain,
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // We need to ignore the docs stories when running jest tests because they need vite transformers for the md files
  stories: !global.navigator?.userAgent?.match?.('jsdom') ? [
    ...rootMain.stories,
    './components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    './recipes/**/*.stories.@(js|jsx|ts|tsx)'
  ] : [
    ...rootMain.stories,
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    './recipes/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [...rootMain.addons],
  staticDirs: ['../public'],

  async viteFinal(config, { configType }) {
    let baseValue = config.base;

    if (process.env.SERVER_SUBDOMAIN || process.env.BASE_PATH) {
      baseValue = `https://ux${process.env.SERVER_SUBDOMAIN}.keisha.com/storybook/${process.env.BASE_PATH}/`;
    }

    return mergeConfig(config, {
      resolve: {
        alias: {
          '@keisha/design-system-icons-web': path.resolve(__dirname, '../../../dist/packages/icons-web/es'),
          '@keisha/design-system-tokens': path.resolve(__dirname, '../../../dist/packages/tokens'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use '@keisha/design-system-tokens/tokens/themes/default/utilities/component' as *;`,
          },
        },
      },
      base: baseValue,
      optimizeDeps: {
        include: ['@keisha/design-system-icons-web']
      },
      define: { 'process.env': {
        IMAGES_PATH: baseValue
      } }
    });
  }
};
