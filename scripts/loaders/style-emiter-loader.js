const rename = s => s.replace(/\.less$/, '.css');

module.exports = function (source, meta) {
    this.cacheable && this.cacheable();

    if(!this.emitFile) throw new Error('emitFile is required from module system');
    if(!meta.file) throw new Error('emitStyle requires the name of the sorurce file');

    const fName = meta.file;
    const done = this.async();
    this.emitFile(rename(fName), source + '\n');
    done(null, '');
};