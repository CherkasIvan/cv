import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$: Observable<any>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userData$ = angularFireAuth.authState;
  }

  signIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          this.router.navigateByUrl('/layout');
        } else {
          this.router.navigateByUrl('/auth');
        }
      });
  }
}
