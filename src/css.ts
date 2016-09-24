export interface IStyle {
    [key: string]: string;
}

export interface ICSS {
    classifier: string;
    raw: string;
    keys: string[];
    style: IStyle;
}

const removeHost = (host: string, s: string) => {
    const hostClass = `.${host}`;
    const idx = s.indexOf(hostClass);
    if (idx >= 0) {
        return s.substr(idx + hostClass.length).trim();
    }
    return s;
};

const css2ng = (hostClass: string, css: ICSS) => {
    const keys = css.keys.map(k => removeHost(hostClass, k));
    return {
        classifier: keys.join(', '),
        keys: css.keys,
        raw: css.raw,
        style: css.style
    };
};

export class Rule {
    private readonly _css;
    private readonly _host: string;

    constructor (hostClass: string, css: ICSS[]) {
        this._css = css;
        this._host = hostClass;
    }

    get raw () { return this._css.raw; }

    get ngCss () { return this._css.map(css => css2ng(this._host, css)); }
}
