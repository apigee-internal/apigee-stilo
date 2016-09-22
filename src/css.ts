export interface IStyle {
    [key: string]: string;
}

export interface ICSS {
    classifier: string;
    raw: string;
    keys: string[];
    style: IStyle;
}