import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userData: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        this.setUserData(result.user);
      });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: any = {
      uid: user.uid,
      email: user.email,
      password: user.password
    };
    console.log(userData);
    this.afAuth.authState.subscribe((user) => {
      console.log(user);
      if (user) {
        this.isAuth$.next(true);
      } else {
        this.isAuth$.next(false);
      }
    });

    return userRef.set(userData, {
      merge: true
    });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth']);
    });
  }

  isAuthenticated(): boolean {
    if (this.isAuth$.value === true) {
      return true;
    } else {
      console.log(this.isAuth$.value);
      return false;
    }
  }
}
