import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';

import { IAuth } from './model/auth.interface';
import { AuthService } from './services/auth.service';
import { authFailure, authSuccess } from './store/actions/auth.action';
import { selectAuthState } from './store/selectors/auth.selector';

@Component({
    selector: 'cv-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf],
})
export class AuthComponent implements OnInit {
    authForm!: FormGroup;
    user: IAuth | null = null;
    constructor(
        private authService: AuthService,
        private store$: Store<IAuth>,
    ) {}

    createForm(): FormGroup {
        this.authForm = new FormGroup({
            email: new FormControl('', {
                validators: [Validators.required, Validators.email],
            }),
            password: new FormControl('', {
                validators: [Validators.required],
            }),
        });
        return this.authForm;
    }

    onSubmit() {
        this.checkAuth();
        this.store$.select(selectAuthState).subscribe((auth) => {
            this.user = auth.user;
        });
    }

    checkAuth() {
        const { email, password } = this.authForm.value;

        if (this.authForm.valid) {
            this.store$.dispatch(authSuccess({ email, password }));
            this.authService.signIn(email, password);
        } else {
            this.store$.dispatch(authFailure({ email, password }));
        }
    }

    get f(): { [key: string]: AbstractControl } {
        return this.authForm.controls;
    }

    onReset(): void {
        this.authForm.reset();
        this.store$.dispatch(authFailure({ email: '', password: '' }));
    }

    ngOnInit(): void {
        this.createForm();
    }
}
