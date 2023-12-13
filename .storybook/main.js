const path = require('path');

module.exports = {
  stories: [],
  addons: [
    {
      name: path.dirname(require.resolve('@storybook/addon-docs/package.json')),
      options: { transcludeMarkdown: true },
    },
    { name: '@storybook/addon-essentials', options: { docs: false } },
    '@storybook/addon-a11y'
  ]
};
