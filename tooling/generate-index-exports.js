var folderList = ['src/app/shared/', 'src/app/core/models/', 'src/app/core/services/', 'src/app/core/enum/'];

var fs = require('fs');

folderList.forEach(function(currentfolder) {
    var exportFilePath = currentfolder + 'index.ts';
    var files = getTypescriptFilesFromFolder(currentfolder);
    var content = '';
    for (var i = 0; i < files.length; i++) {
        var file = files[i].substr(currentfolder.length);
        file = file.substr(0, file.length - 3);
        if (file != 'index' && file != 'shared.module') {
            content += "export * from './" + file + "';\r\n";
            console.log('added: ' + file);
        }
    }
    console.log('------- write file: ' + exportFilePath);
    fs.writeFileSync(exportFilePath, content, 'utf8');
});

function getTypescriptFilesFromFolder(folder) {
    var dirFiles = fs.readdirSync(folder);
    if (!dirFiles) {
        return [];
    }
    var files = [];
    for (var i = 0; i < dirFiles.length; i++) {
        var file = dirFiles[i];
        var filePath = folder + file;
        var stats = fs.lstatSync(filePath);
        if (stats.isDirectory()) {
            files.push.apply(files, getTypescriptFilesFromFolder(filePath + '/'));
        } else {
            if (
                file.endsWith('.ts') &&
                !file.endsWith('.spec.ts') &&
                // !file.endsWith('.enum.ts') &&
                !file.endsWith('.animation.ts') &&
                !file.endsWith('.constant.ts')
            ) {
                files.push(folder + file);
            }
        }
    }
    return files;
}
