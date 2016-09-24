const tools = require('./tools');

const varRx = /^(@[^:]+):([^;]+);$/;

const rename = s => s.trim()
    .replace(/^@/, '')
    .replace(/-[a-z]/g, s => s.substr(1).toUpperCase());

const parseVar = s => {
    const matches = varRx.exec(s);
    if (!matches) { throw new Error (`Invalid variable declaration: ${s}`); }
    return {
        key: rename(matches[1]),
        value: matches[2].trim()
    };
};

const parseLess = source => tools
    .removeComments(source)
    .split('\n')
    .filter(l => l.trim() !== '')
    .map(l => parseVar(l.trim()))
    .reduce((r, l) => { r[l.key] = l.value; return r; }, {});

module.exports = function (source) {
    this.cacheable && this.cacheable();
    const done = this.async();
    const less = parseLess(source);
    done(null, `module.exports = ${JSON.stringify(less)}`);
};