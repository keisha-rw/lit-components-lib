const fsxtra = require('fs-extra');
const fs = require('fs');
const path = require('path');

function copyFiles(files, destDir) {
  // Loop through the args to get all the files (or directories) to copy
  files.forEach((fileOrDir) => {
    const newPath = path.join(destDir, path.basename(fileOrDir));
    // If we have a file extension, this must be a file
    if (fileOrDir.includes('.')) {
      fs.copyFileSync(fileOrDir, newPath);
    } else {
      // It must be a directory - empty it first and copy the files over
      fsxtra.emptyDirSync(newPath);
      fsxtra.copySync(fileOrDir, newPath);
    }
  })
}

// The first two values in argv are:
// 1) where node is installed on the machine
// 2) the location of this script
// So, we need to slice those off to get our inputs
// The last arg passed should be the output directory
copyFiles(process.argv.slice(2, process.argv.length - 1), process.argv[process.argv.length - 1]);
