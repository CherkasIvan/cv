import { IPhoto } from './photo.interface';

export interface IPhotoOptions {
  [key: string]: any;
  slides: IPhoto[];
  active: number;
  hide: number | null;
  interval: number;
  indicators: boolean;
  scrollAnchor?: string;
}
