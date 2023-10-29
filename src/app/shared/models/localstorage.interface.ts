import { IProfile } from '@auth/model/profile.interface';

export interface ILocalStorage {
  previousUser: IProfile | null;
  user: IProfile | null;
  rout: string;
  isDarkMode: boolean;
  language: string;
}
