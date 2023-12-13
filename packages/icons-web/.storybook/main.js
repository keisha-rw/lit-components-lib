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
  stories: [...rootMain.stories, '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...rootMain.addons],

  async viteFinal(config, { configType }) {
    let baseValue = config.base;

    if (process.env.SERVER_SUBDOMAIN || process.env.BASE_PATH) {
      baseValue = `https://ux${process.env.SERVER_SUBDOMAIN}.keisha.com/storybook/${process.env.BASE_PATH}/`;
    }

    return mergeConfig(config, {
      resolve: {
        alias: {
          '@keisha/design-system-tokens': path.resolve(__dirname, '../../../dist/packages/tokens'),
        },
      },
      base: baseValue,
      optimizeDeps: {
        include: ['@keisha/design-system-tokens'],
      },
    });
  },
};
