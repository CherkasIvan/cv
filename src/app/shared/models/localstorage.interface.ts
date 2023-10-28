import { IProfile } from '@app/auth/model/profile.interface';

export interface ILocalStorage {
  user: IProfile | null;
  rout: string;
  isDarkMode: boolean;
  language: string;
}
