import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuth } from './model/auth.interface';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'cv-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup<IAuth>;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  createForm(): FormGroup<IAuth> {
    this.authForm = new FormGroup<IAuth>({
      firstName: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', { validators: [Validators.required] })
    });
    return this.authForm;
  }

  onSubmit() {
    this.checkAuth();
  }

  checkAuth() {
    if (this.authForm.valid) {
      const formBody: any = this.authForm.value;
      this.authService.checkUser(formBody);
      if (this.authService.checkUser(formBody)) {
        this.router.navigate(['/layout']);
      }
    }
  }

  ngOnInit(): void {
    this.createForm();
  }
}
