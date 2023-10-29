import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

import { localStorageService } from '@shared/services/localstorage/local-storage.service';
import { SnackbarService } from '@shared/services/snackbar/snackbar.service';

import { ERouterPath } from '@utils/enum/router-path.enum';

import { ISnackbar } from '@app/shared/models/snackbar.interface';

@Injectable({
  providedIn: 'root'
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
    private readonly _localStorageService: localStorageService
  ) {
    if (this.userState.user) {
      this.isAuth$.next(true);
      this._router.navigate([this.userState.rout]);
    }
  }

  signIn(email: string, password: string) {
    return this._afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (!this.userState.previousUser) {
          this._localStorageService.setUser(result.user);
        } else {
          this._localStorageService.usersState.user = result.user;
          this._localStorageService.usersState.rout = this.userState.rout;
          this._localStorageService.usersState.isDarkMode =
            this.userState.isDarkMode;
          this._localStorageService.usersState.language =
            this.userState.language;
        }

        this.setUserData(result.user);
        if (result.user) {
          this.isAuth$.next(true);
          this._afAuth.authState.subscribe((user) => {
            if (user) {
              const snackbarDataSuccess: ISnackbar = {
                message: `You are logged in as ${result.user?.email}`,
                isSuccess: true
              };
              this.userState.user = result.user;
              this.userState.rout = this._localStorageService.usersState.rout;
              this.userState.isDarkMode =
                this._localStorageService.usersState.isDarkMode;
              this.userState.language =
                this._localStorageService.usersState.language;
              console.log(this.userState);
              console.log(user);
              this._router.navigate([this.userState.rout]);
              this._snackbarService.openSnackBar(snackbarDataSuccess);
            }
          });
        }
      })
      .catch((error: Error) => {
        const snackbarDataError: ISnackbar = {
          message: error.message,
          isSuccess: false
        };
        this.isAuth$.next(false);
        this._snackbarService.openSnackBar(snackbarDataError);
        return;
      });
  }

  setUserData(user: firebase.default.User | null) {
    const userRef: AngularFirestoreDocument<User> = this._afs.doc(
      `users/${user?.uid}`
    );
    const userData: any = {
      uid: user?.uid,
      email: user?.email,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      emailVerified: user?.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }
  // Sign out
  signOut() {
    return this._afAuth.signOut().then(() => {
      const removeUser = this._localStorageService.getUsersState();
      const previousUser = removeUser.user;
      removeUser.previousUser = previousUser;
      removeUser.user = null;
      console.log(removeUser);
      if (removeUser.user === null) {
        this._localStorageService.setNewUserState(removeUser);
      }
      this.isAuth$.next(false);
      this._router.navigate([ERouterPath.AUTH]);
    });
  }
}
