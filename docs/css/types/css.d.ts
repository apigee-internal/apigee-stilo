export interface IStyle {
    [key: string]: string;
}
export interface ICSS {
    classifier: string;
    raw: string;
    keys: string[];
    style: IStyle;
}
export declare class Rule {
    private readonly _css;
    private readonly _host;
    constructor(hostClass: string, css: ICSS[]);
    readonly raw: any;
    readonly ngCss: any;
}
