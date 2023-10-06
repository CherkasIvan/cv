import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
	AngularFirestore,
	AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../model/user.interface';
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	userData: any; // Save logged in user data
	constructor(
		public afs: AngularFirestore, // Inject Firestore service
		public afAuth: AngularFireAuth, // Inject Firebase auth service
		public router: Router,
		public ngZone: NgZone // NgZone service to remove outside scope warning
	) {
		/* Saving user data in localstorage when 
		logged in and setting up null when logged out */
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.userData = user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				JSON.parse(localStorage.getItem('user')!);
			} else {
				localStorage.setItem('user', 'null');
				JSON.parse(localStorage.getItem('user')!);
			}
		});
	}
	// Sign in with email/password
	signIn(email: string, password: string) {
		return this.afAuth
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				console.log(result)
				this.ngZone.run(() => {
					this.router.navigate(['layout']);
				});
				this.SetUserData(result.user);
			})
			.catch((error) => {
				window.alert(error.message);
				this.router.navigate(['auth']);
			});
	}

	SendVerificationMail() {
		return this.afAuth.currentUser
			.then((u: any) => u.sendEmailVerification())
			.then(() => {
				this.router.navigate(['verify-email-address']);
			});
	}

	// Returns true when user is looged in and email is verified
	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user')!);
		return user !== null && user.emailVerified !== false ? true : false;
	}
	// Auth logic to run auth providers
	AuthLogin(provider: any) {
		return this.afAuth
			.signInWithPopup(provider)
			.then((result) => {
				this.ngZone.run(() => {
					this.router.navigate(['layout']);
				});
				this.SetUserData(result.user);
			})
			.catch((error) => {
				this.router.navigate(['auth']);
				window.alert(error);
			});
	}

	SetUserData(user: any) {
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
	SignOut() {
		return this.afAuth.signOut().then(() => {
			localStorage.removeItem('user');
			this.router.navigate(['auth']);
		});
	}
}