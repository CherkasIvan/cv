import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SnackbarService } from '@shared/services/snackbar/snackbar.service';
import { IUser } from '../model/user.interface';
import { Firestore } from 'firebase/firestore';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  actualUser$!:IUser | null
  isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackbarService: SnackbarService,
    private firestore: Firestore
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
        this.userData = result.user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.setUserData(result.user as any);
        if (result.user) {
          console.log(result.user)
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

  setUserData(user: IUser) {
      const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(
        `users/${user.uid}`
      );
      this.actualUser$ = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      };
      return userRef.set(this.actualUser$, {
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
