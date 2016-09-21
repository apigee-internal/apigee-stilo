const fs = require('fs');
const path = require('path');
const pwd = process.cwd();
const buildPath = path.resolve(pwd, './build');
const traverse = require('./traverse');

const deleteFile = (path) => { fs.unlinkSync(path); };
const deleteFolder = (path) => { if (path !== buildPath) { fs.rmdirSync(path); }};

traverse(buildPath, deleteFile, deleteFolder);