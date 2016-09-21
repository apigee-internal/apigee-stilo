module.exports = fileName =>
    function (source) {
        this.cacheable && this.cacheable();
        const done = this.async();
        this.emitFile(fileName, source);
        done(null, '');
    };