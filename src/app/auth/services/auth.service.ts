import { User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { ISnackbar } from '@shared/models/snackbar.interface';
import { localStorageService } from '@shared/services/localstorage/local-storage.service';
import { SnackbarService } from '@shared/services/snackbar/snackbar.service';

import { ERouterPath } from '@utils/enum/router-path.enum';

import { IProfile } from '../model/profile.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public userData: User | null = null;
    public isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public userState = this._localStorageService.getUsersState();

    constructor(
        private readonly _afs: AngularFirestore,
        private readonly _afAuth: AngularFireAuth,
        private readonly _router: Router,
        private readonly _snackbarService: SnackbarService,
        private readonly _localStorageService: localStorageService,
    ) {
        if (localStorage.getItem('usersState')) {
            this.isAuth$.next(true);
        } else {
            this.isAuth$.next(true);
        }
    }

    signIn(email: string, password: string) {
        return this._afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                !this.userState
                    ? this._localStorageService.initUser(result.user)
                    : this._localStorageService.setUser(result.user);

                this.setUserData(result.user);
                if (result.user) {
                    this.isAuth$.next(true);
                    this._afAuth.authState.subscribe((user) => {
                        if (user) {
                            const snackbarDataSuccess: ISnackbar = {
                                message: `You are logged in as ${result.user?.email}`,
                                isSuccess: true,
                            };
                            // this.userState.rout = this._localStorageService.usersState.rout;

                            if (this.isAuth$.value) {
                                this._router.navigate([ERouterPath.LAYOUT]);
                                this._snackbarService.openSnackBar(
                                    snackbarDataSuccess,
                                );
                            }
                        }
                    });
                }
            })
            .catch((error: Error) => {
                const snackbarDataError: ISnackbar = {
                    message: error.message,
                    isSuccess: false,
                };
                this.isAuth$.next(false);
                this._snackbarService.openSnackBar(snackbarDataError);
                return;
            });
    }

    setUserData(user: firebase.default.User | null) {
        const userRef: AngularFirestoreDocument<IProfile> = this._afs.doc(
            `users/${user?.uid}`,
        );
        const userData: IProfile = {
            uid: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            emailVerified: user?.emailVerified,
        };
        return userRef.set(userData, {
            merge: true,
        });
    }
    // Sign out
    signOut() {
        return this._afAuth.signOut().then(() => {
            const removeUser = this._localStorageService.getUsersState();
            if (removeUser) {
                const previousUser = removeUser.user;
                removeUser.previousUser = previousUser;
                removeUser.user = null;
                if (removeUser.user === null) {
                    this._localStorageService.setNewUserState(removeUser);
                }
                this.isAuth$.next(false);
                this._router.navigate([ERouterPath.AUTH]);
            }
        });
    }
}
