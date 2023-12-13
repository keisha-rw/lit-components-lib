const StyleDictionaryPackage = require('style-dictionary');
const fs = require('fs');
const getStyleDictionaryConfig = require('./config');

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT THEMES AND PLATFORMS

let getThemes = [];

if (fs.existsSync('tokens/themes')) {
  getThemes = fs.readdirSync('tokens/themes/');
} else {
  getThemes.push('default');
}

getThemes.map(function (theme) {
  ['css', 'es', 'cjs'].map(function (platform) {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig.func(theme, platform)
    );
    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');
  });
});

const handleJSIndexFiles = () => {
  /**
   * ES
   */

  // build JavaScript index file
  fs.writeFileSync(
    'dist/es/index.js',
    `${getThemes
      .map(function (theme) {
        return `import * as theme${theme} from "./${theme}/tokens";`;
      })
      .join('\n')}\nexport {${getThemes
        .map(function (theme) {
          return `theme${theme}`;
        })
        .join(', ')}};`,
    'utf-8'
  );

  // build TypeScript definition file
  fs.writeFileSync(
    'dist/es/index.d.ts',
    `${getThemes
      .map(function (theme) {
        return `import * as theme${theme} from "./${theme}/tokens";`;
      })
      .join('\n')}\nexport {${getThemes
        .map(function (theme) {
          return `theme${theme}`;
        })
        .join(', ')}};
  `,
    'utf-8'
  );

  /**
   * CJS
   */

  // build JavaScript index file
  fs.writeFileSync(
    'dist/cjs/index.js',
    `${getThemes
      .map(function (theme) {
        return `exports.theme${theme} = require('./${theme}/tokens');`;
      })
      .join('\n')}`,
    'utf-8'
  );

  // build TypeScript definition file
  fs.writeFileSync(
    'dist/cjs/index.d.ts',
    `${getThemes
      .map(function (theme) {
        return `export * as theme${theme} from "./${theme}/tokens";`;
      })
      .join('\n')}
  `,
    'utf-8'
  );
};

handleJSIndexFiles();

console.log('\n==============================================');
console.log('\nBuild completed!');
