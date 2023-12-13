const rootMain = require('../../../.storybook/main');
const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  ...rootMain,
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
  async viteFinal(config, { configType }) {
    let basePathEnvVariable = (!process.env.BASE_PATH || process.env.BASE_PATH === '') ? '' : `/${process.env.BASE_PATH}`;

    const configWithoutViteDTS = Object.assign({}, config, {
      plugins: config.plugins.filter((plugin) => !['vite:dts'].includes(plugin['name'])),
    });
    // return the customized config
    return mergeConfig(configWithoutViteDTS, {
      resolve: {
        alias: {
          '@keisha/design-system-tokens': path.resolve(__dirname, '../../../dist/packages/tokens'),
          '@keisha/design-system-icons-web': path.resolve(__dirname, '../../../dist/packages/icons-web'),
        },
      },
      base: `https://ux${process.env.SERVER_SUBDOMAIN}.keisha.com/storybook${basePathEnvVariable}/`,
      optimizeDeps: {
        include: ['@keisha/design-system-tokens']
      },
    });
  },
};
