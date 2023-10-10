import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	declarations: [AuthComponent],
	exports: [AuthComponent],
	imports: [
		AuthRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireAuthModule,
		MatSnackBarModule,
		provideAuth(() => getAuth()),
		CommonModule
	],
	providers: [MatSnackBarModule]
})
export class AuthModule {}
