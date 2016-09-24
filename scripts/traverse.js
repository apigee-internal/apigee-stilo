const fs = require('fs');
const path = require('path');
const pwd = process.cwd();
const buildPath = path.resolve(pwd, './build');

const traverse = (path, onFile, onDir) => {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach((file,index) => {
            const curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) { // recurse
                traverse(curPath, onFile, onDir);
            } else { // delete file
                if(onFile) { onFile(curPath); }
            }
        });
        if(onDir) { onDir(path); }
    }
};

module.exports = traverse;