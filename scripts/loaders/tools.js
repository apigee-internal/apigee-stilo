const removeComments = s => s
    .replace(/\/\*(?:.*|\n)*\*\//g, '')
    .replace(/\/\/[^\n]*\n/g, '');

const toArray = o => o ? Array.prototype.slice.call(o) : [];

module.exports = {
    removeComments: removeComments,
    toArray: toArray
};
