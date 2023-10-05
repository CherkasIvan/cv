import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'cv-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;

  constructor(private authService: AuthService) {}

  createForm(): FormGroup {
    this.authForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl('', { validators: [Validators.required] })
    });
    return this.authForm;
  }

  onSubmit() {
    this.checkAuth();
  }

  checkAuth() {
    if (this.authForm.valid) {
      const { email, password }: any = this.authForm.value;
      this.authService.signIn(email, password);
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.authForm.controls;
  }

  onReset(): void {
    this.authForm.reset();
  }

  ngOnInit(): void {
    this.createForm();
  }
}
