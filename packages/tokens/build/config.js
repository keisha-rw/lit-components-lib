function getStyleDictionaryConfig(theme, platform) {
  return {
    source: [
      `tokens/themes/${theme}/**/*.json`,
      'tokens/01-base/**/*.json',
      `tokens/platforms/${platform}/*.json`,
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        prefix: 'pds',
        buildPath: `dist/css/${theme}/`,
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables',
            options: {
              selector: ':root, :host',
            },
          },
        ],
      },
      es: {
        transformGroup: 'js',
        buildPath: `dist/es/${theme}/`,
        files: [
          {
            destination: `tokens.js`,
            format: 'javascript/es6',
          },
          {
            destination: `tokens.d.ts`,
            format: 'typescript/es6-declarations',
          },       
        ],
      },
      cjs: {
        transformGroup: 'js',
        buildPath: `dist/cjs/${theme}/`,
        files: [
          {
            destination: `tokens.js`,
            format: 'javascript/module-flat',
          },
          {
            destination: `tokens.d.ts`,
            format: 'typescript/module-declarations',
          }, 
        ],
      },
    },
  };
}

module.exports.func = getStyleDictionaryConfig;
