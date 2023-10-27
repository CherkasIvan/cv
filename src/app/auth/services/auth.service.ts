import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

import { SnackbarService } from '@shared/services/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: User | null = null;
  isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private snackbarService: SnackbarService
  ) {
    if (localStorage.getItem('user')) {
      this.isAuth$.next(true);
      this.router.navigate(['layout']);
    }
  }
  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        this.setUserData(result.user);
        if (result.user) {
          this.isAuth$.next(true);
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              this.router.navigate(['layout']);
              this.snackbarService.openSnackBar(result.user?.email);
            }
          });
        }
      })
      .catch((error: Error) => {
        this.isAuth$.next(false);
        this.snackbarService.openSnackBar(error.message);
        return;
      });
  }

  setUserData(user: firebase.default.User | null) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
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
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.isAuth$.next(false);
      this.router.navigate(['auth']);
    });
  }
}
