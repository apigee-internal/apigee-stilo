const tools = require('./tools');

const groupRx = /[^\{\}]*\{[^\}]*}/;
const keyRx = /[^,]+/;

const splitKeyValue = s => {
    const idx = s.indexOf('{');
    if (idx < 0) return;
    return { keys: s.substr(0, idx), block: s.substr(idx + 1, s.lastIndexOf('}') - 1) };
};

const splitKeys = s => tools.toArray(keyRx.exec(s)).map(k => k.trim());

const splitLine = s => {
    const idx = s.indexOf(':');
    return { key: s.substr(0, idx).trim(), value: s.substr(idx + 1).trim() };
};

const splitBlock = s => s.split(';')
        .map(k => k.trim()).map(splitLine)
        .filter(l => l.key !== '')
        .reduce((r, l) => { r[l.key] = l.value; return r; }, {});

const getGroup = s => {
    const pair = splitKeyValue(s);
    const keys = splitKeys(pair.keys);
    return {
        classifier: pair.keys.trim(),
        raw: s.replace(/[\s\n]+/g, ' '),
        keys: keys,
        style: splitBlock(pair.block)
    }
};

const parseLess = source => {
    const sanitizedRaw = tools.removeComments(source);
    const matches = groupRx.exec(sanitizedRaw);
    if (!matches) { return {}; }
    return tools.toArray(matches).map(getGroup);
};

module.exports = function (source) {
    this.cacheable && this.cacheable();
    const done = this.async();
    const less = parseLess(source);
    done(null, `module.exports = ${JSON.stringify(less)}`);
};
