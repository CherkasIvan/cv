import { Injectable } from '@angular/core';

import { ILocalStorage } from '@shared/models/localstorage.interface';

import { ERouterPath } from '@utils/enum/router-path.enum';

@Injectable({
    providedIn: 'root',
})
export class localStorageService {
    public usersState: ILocalStorage | null = null;

    public setUser(userData: firebase.default.User | null): void {
        this.usersState = this.getUsersState();
        if (this.usersState) {
            this.usersState.user = userData;
            localStorage.setItem('usersState', JSON.stringify(this.usersState));
        }
    }

    public setRout(currentRoute: string): void {
        if (this.usersState) {
            this.usersState.rout = currentRoute;
            localStorage.setItem('usersState', JSON.stringify(this.usersState));
        }
    }

    public setMode(currentMode: string): void {
        if (this.usersState) {
            this.usersState.isDarkMode !== currentMode;
            localStorage.setItem('usersState', JSON.stringify(this.usersState));
        }
    }

    public setLanguage(currentLanguage: string): void {
        if (this.usersState) {
            this.usersState.language = currentLanguage;
            localStorage.setItem('usersState', JSON.stringify(this.usersState));
        }
    }

    public setNewUserState(newUsersState: ILocalStorage): void {
        this.usersState = newUsersState;
        if (this.usersState) {
            localStorage.setItem('usersState', JSON.stringify(newUsersState));
        }
    }

    public initUser(user: firebase.default.User | null): void {
        if (!localStorage.getItem('userState')) {
            this.usersState = {
                previousUser: null,
                user: user,
                rout: `${ERouterPath.LAYOUT}`,
                isDarkMode: 'false',
                language: 'ru',
            };
        }
    }

    public getUsersState(): ILocalStorage | null {
        const getUser = localStorage.getItem('usersState');
        if (getUser) {
            return JSON.parse(getUser);
        } else {
            return this.usersState;
        }
    }
}
