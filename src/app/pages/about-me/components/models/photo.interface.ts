export interface IPhoto {
    [key: string]: unknown;
    src: string;
    title: string;
    description?: string;
    route?: string;
}
