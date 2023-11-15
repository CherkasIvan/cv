import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IAuth } from './model/auth.interface';
import { AuthService } from './services/auth.service';
import { authFailure, authSuccess } from './store/actions/auth.action';
import { selectAuthState } from './store/selectors/auth.selector';

@Component({
    selector: 'cv-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf],
})
export class AuthComponent implements OnInit {
    authForm!: FormGroup;
    user: IAuth | null = null;
    constructor(
        private _authService: AuthService,
        private _store$: Store<IAuth>,
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
        this._store$.select(selectAuthState).subscribe((auth) => {
            this.user = auth.user;
        });
    }

    checkAuth() {
        const { email, password } = this.authForm.value;

        if (this.authForm.valid) {
            this._store$.dispatch(authSuccess({ user }));
            this._authService.signIn(email, password);
        } else {
            this._store$.dispatch(authFailure({ error: Error }));
        }
    }

    get f(): { [key: string]: AbstractControl } {
        return this.authForm.controls;
    }

    onReset(): void {
        this.authForm.reset();
        this._store$.dispatch(authFailure({ error: Error }));
    }

    ngOnInit(): void {
        this.createForm();
    }
}
