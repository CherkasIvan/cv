import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './services/auth.service';
import {
    authReducer,
    authReducerFeatureKey
} from './store/reducers/auth.reducer';

@NgModule({
    declarations: [AuthComponent],
    exports: [AuthComponent],
    imports: [
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        StoreModule.forFeature(authReducerFeatureKey, authReducer),
        provideAuth(() => getAuth()),
        CommonModule
    ],
    providers: [AuthService]
})
export class AuthModule {}
