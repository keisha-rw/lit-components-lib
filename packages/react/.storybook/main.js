const { mergeConfig } = require('vite');
const path = require('path');
const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: { ...rootMain.core, builder: '@storybook/builder-vite' },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async viteFinal(config, { configType }) {
    let baseValue = config.base || '/';

    if (process.env.SERVER_SUBDOMAIN || process.env.BASE_PATH) {
      baseValue = `https://ux${process.env.SERVER_SUBDOMAIN}.keisha.com/storybook/${process.env.BASE_PATH}/`;
    }

    const configWithoutViteDTS = {
      ...config,
      plugins: config.plugins.filter(
        (plugin) => !['vite:dts'].includes(plugin.name),
      ),
    };
    // return the customized config
    return mergeConfig(configWithoutViteDTS, {
      base: baseValue,
      resolve: {
        alias: [
          {
            find: '@keisha/design-system-icons-react',
            replacement: path.resolve(
              __dirname,
              '../../../dist/packages/icons-react/es',
            ),
          },
          {
            find: '@keisha/design-system-icons-web',
            replacement: path.resolve(
              __dirname,
              '../../../dist/packages/icons-web/es',
            ),
          },
          {
            find: /@keisha\/design-system(?!.*(\/css|\/utils|-))/,
            replacement: path.resolve(
              __dirname,
              '../../../packages/web-components/src/index.ts',
            ),
          },
          {
            find: /@keisha\/design-system\/css\/(.*)/,
            replacement: path.resolve(
              __dirname,
              '../../../packages/web-components/src/lib/components/$1',
            ),
          },
          {
            find: /@keisha\/design-system\/utils\/(.*)/,
            replacement: path.resolve(
              __dirname,
              '../../../packages/web-components/src/lib/components/$1',
            ),
          },
          {
            find: '@keisha/design-system-react',
            replacement: path.resolve(__dirname, '../../../packages/react/src'),
          },
          {
            find: '@keisha/design-system-tokens',
            replacement: path.resolve(
              __dirname,
              '../../../dist/packages/tokens',
            ),
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
      optimizeDeps: {
        include: ['@keisha/design-system-icons-react'],
      },
      define: {
        'process.env': {
          IMAGES_PATH: baseValue,
        },
      },
    });
  },
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    './recipes/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
  staticDirs: ['../public'],
};
