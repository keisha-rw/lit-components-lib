const {execSync} = require('child_process')
const fs = require('fs');
const dir = 'tgz-packages';

if (!fs.existsSync(`./${dir}`)){
    fs.mkdirSync(`./${dir}`);
}

const rename = (oldPath, newPath) => {
    fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
        console.log(`Successfully moved - ${newPath}`)
        });
};

const renameAll = () => {
    rename(`dist/packages/web-components/keisha-design-system-0.0.0.tgz`, `${dir}/keisha-design-system-0.0.0.tgz`);
    rename(`dist/packages/tokens/keisha-design-system-tokens-0.0.0.tgz`, `${dir}/keisha-design-system-tokens-0.0.0.tgz`);
    rename(`dist/packages/react/keisha-design-system-react-0.0.0.tgz`, `${dir}/keisha-design-system-react-0.0.0.tgz`);
    rename(`dist/packages/icons-react/keisha-design-system-icons-react-0.0.0.tgz`, `${dir}/keisha-design-system-icons-react-0.0.0.tgz`);
    rename(`dist/packages/icons-web/keisha-design-system-icons-web-0.0.0.tgz`, `${dir}/keisha-design-system-icons-web-0.0.0.tgz`);
}

try {
    process.chdir('dist/packages/web-components');
    execSync("npm pack");
    process.chdir('../tokens');
    execSync("npm pack");
    process.chdir('../react');
    execSync("npm pack");
    process.chdir('../icons-react');
    execSync("npm pack");
    process.chdir('../icons-web');
    execSync("npm pack");
    process.chdir('../../../');

    setTimeout(renameAll, 2000);
} catch (err) {
    console.error(err);
}
