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
  ) {}

  signIn(email: string, password: string) {
    return this._afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this._localStorageService.setUser(result.user);
        this.setUserData(result.user);
        if (result.user) {
          this.isAuth$.next(true);
          this._afAuth.authState.subscribe(() => {
            if (this.userState.user) {
              this._router.navigate([this.userState.rout]);
              this._snackbarService.openSnackBar(result.user?.email);
            }
          });
        }
      })
      .catch((error: Error) => {
        this.isAuth$.next(false);
        this._snackbarService.openSnackBar(error.message);
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
      const removeUser = localStorage.getItem('usersState');
      const userState = JSON.parse(removeUser!);
      userState.user = null;
      console.log(removeUser);
      if (userState.user === null) {
        this._localStorageService.setNewUserState(userState);
      }
      this.isAuth$.next(false);
      this._router.navigate([ERouterPath.AUTH]);
    });
  }
}
