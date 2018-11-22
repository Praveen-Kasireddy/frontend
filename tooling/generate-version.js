const fs = require('fs');

const newVersion = process.argv[2];

if (!newVersion || !newVersion.length) {
    console.log(`The version number must be provided!`);
    process.exit(1);
}

console.log(`Bumping to version ${newVersion}\n`);

updatePackageJson();
updateVersionTxt();
updateVersionTs();
updateReadmeMd();

function updatePackageJson() {
    const packageJsonPath = 'package.json';
    const content = fs.readFileSync(packageJsonPath, 'utf8');
    const newContent = content.replace(/"version":.*/g, `"version": "${newVersion}",`);

    console.log('Bumping package.json');

    fs.writeFileSync(packageJsonPath, newContent, 'utf8');
}

function updateVersionTxt() {
    const versionTxtPath = 'version.txt';

    console.log('Bumping version.txt');
    let versionContent = 'Frontend:' + newVersion + '\n';
    versionContent += 'NodeCore:' + newVersion + '\n';

    fs.writeFileSync(versionTxtPath, versionContent, 'utf8');
}
function updateVersionTs() {
    const versionTxtPath = 'src/app/declarations/version/version.ts';

    console.log('Bumping version.ts');
    let versionContent = "export const version = '" + newVersion + "';\n";

    fs.writeFileSync(versionTxtPath, versionContent, 'utf8');
}

function updateReadmeMd() {
    const packageJsonPath = 'README.md';
    const content = fs.readFileSync(packageJsonPath, 'utf8');
    const newContent = content.replace(/<sup>(.*)?<\/sup>/g, `<sup>${newVersion}</sup>`);

    console.log('Bumping README.md');

    fs.writeFileSync(packageJsonPath, newContent, 'utf8');
}
