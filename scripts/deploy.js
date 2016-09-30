const path = require('path');
const fs = require('fs');

'use strict';

const packageJson = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), './package.json'), 'utf8'));

const version = `v${packageJson.version}`;

console.log(version);