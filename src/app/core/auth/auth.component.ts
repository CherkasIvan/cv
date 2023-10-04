import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'cv-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

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
      this.submitted = true;
      const formBody: any = this.authForm.value;
      this.authService.signIn(formBody.email, formBody.password);
    } else {
      return;
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.authForm.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.authForm.reset();
  }

  ngOnInit(): void {
    this.createForm();
  }
}
