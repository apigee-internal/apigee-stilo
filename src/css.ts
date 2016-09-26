import * as _ from 'lodash';

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
        return `:host ${s.substr(idx + hostClass.length).trim()}`.trim();
    }
    return s;
};

const css2ng = (hostClass: string, css: ICSS) => {
    const keys = css.keys.map(k => removeHost(hostClass, k));
    const classifier = keys.join(', ');
    const rawStyles = _.map(css.style, (v, k) => `${k}: {v};`).join('');
    return {
        classifier: classifier,
        keys: keys,
        raw: `${classifier} {${rawStyles}}`,
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

    get raw () { return this._css.map(css => css.raw).join('\n'); }

    get ngCss () { return this._css.map(css => css2ng(this._host, css).raw).join('\n'); }
}
