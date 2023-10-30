import { Injectable } from '@angular/core';

import { ILocalStorage } from '@shared/models/localstorage.interface';

import { ERouterPath } from '@utils/enum/router-path.enum';

@Injectable({
  providedIn: 'root'
})
export class localStorageService {
  public usersState: ILocalStorage = {
    previousUser: null,
    user: null,
    rout: `${ERouterPath.LAYOUT}`,
    isDarkMode: false,
    language: 'ru'
  };

  public setUser(userData: any): void {
    if ((this.usersState.user = userData)) {
      localStorage.setItem('usersState', JSON.stringify(this.usersState));
    }
  }

  public setRout(currentRoute: string): void {
    if ((this.usersState.rout = currentRoute)) {
      localStorage.setItem('usersState', JSON.stringify(this.usersState));
    }
  }

  public setMode(currentMode: boolean): void {
    console.log(currentMode);
    if ((this.usersState.isDarkMode = currentMode)) {
      localStorage.setItem('usersState', JSON.stringify(this.usersState));
    }
  }

  public setLanguage(currentLanguage: string): void {
    console.log(currentLanguage);
    if ((this.usersState.language = currentLanguage)) {
      localStorage.setItem('usersState', JSON.stringify(this.usersState));
    }
  }

  public setNewUserState(newUsersState: ILocalStorage): void {
    this.usersState = newUsersState;
    if (this.usersState) {
      localStorage.setItem('usersState', JSON.stringify(newUsersState));
    }
  }

  public getUsersState(): ILocalStorage {
    const getUser = localStorage.getItem('usersState');
    if (getUser) {
      console.log(JSON.parse(getUser));
      return JSON.parse(getUser);
    } else {
      return this.usersState;
    }
  }
}
