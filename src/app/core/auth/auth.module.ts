import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AuthComponent],
  exports: [AuthComponent],
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    provideAuth(() => getAuth()),
    CommonModule
  ]
})
export class AuthModule {}
