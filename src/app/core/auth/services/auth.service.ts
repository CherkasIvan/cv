import { Injectable, NgZone } from '@angular/core';
import {
	AngularFirestore,
	AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../model/user.interface';
import { BehaviorSubject } from 'rxjs';
import { SnackbarService } from '@app/shared/services/snackbar/snackbar.service';
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	userData: any;
	isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false)
	constructor(
		public afs: AngularFirestore,
		public afAuth: AngularFireAuth,
		public router: Router,
		public ngZone: NgZone,
		private snackbarService: SnackbarService
	) {
		if (localStorage.getItem('user')) {
			this.isAuth$.next(true)
			this.router.navigate(['layout']);
		}
	}
	signIn(email: string, password: string) {
		return this.afAuth
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				this.userData = result.user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				this.setUserData(result.user);
				if (result.user) {
					this.isAuth$.next(true)
					this.afAuth.authState.subscribe((user) => {
						if (user) {
							this.router.navigate(['layout']);
							this.snackbarService.openSnackBar(result.user?.email)
						}
					});
				}

			})
			.catch((error: Error) => {
				this.isAuth$.next(false)
				this.snackbarService.openSnackBar(error.message)
				return
			});
	}

	setUserData(user: any) {
		const userRef: AngularFirestoreDocument<any> = this.afs.doc(
			`users/${user.uid}`
		);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			emailVerified: user.emailVerified,
		};
		return userRef.set(userData, {
			merge: true,
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
