module.exports = function (source) {
    this.cacheable && this.cacheable();
    const fileNameFromRequest = this.request.substr(this.request.lastIndexOf('/') + 1);
    if(!this.emitFile) throw new Error('emitFile is required from module system');
    const done = this.async();
    this.emitFile(fileNameFromRequest, source);
    done(null, '');
};
module.exports.raw = true;