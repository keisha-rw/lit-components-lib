const { globSync } = require('glob')
const util = require('util');
const fs = require('fs');
const path = require('path');
const copyFilePromise = util.promisify(fs.copyFile);
const replace = require('replace-in-file');

const outputDir = 'dist/packages/tokens/pds-style-mixins';
const replaceOptions = {
  files: `${outputDir}/*`,
  from: '../../../../../tokens/',
  to: '../',
};

globSync('**/web-components/src/**/*-mixin.scss', (error, mixinFiles) => {
  if (error) {
    console.error('Error copying style mixins to dist', error);
    process.exit(1);
  }
  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
  }
  copyFiles(mixinFiles, outputDir).then(() => {
    try {
      const results = replace.sync(replaceOptions);
    }
    catch (error) {
      console.error('Error occurred:', error);
      process.exit(1);
    }
    }).catch(err => {
        console.log(err);
        process.exit(1);
    });
})

function copyFiles(files, destDir) {
    return Promise.all(files.map(f => {
      const [fileName] = f.split('/').slice(-1);
      return copyFilePromise(f, path.join(destDir, fileName));
    }));
}
