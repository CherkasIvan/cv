import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAuth } from '../model/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  isAuthenticated(): boolean {
    this.isAuth$.next(true);
    return true;
  }

  checkUser(userData: any): boolean {
    if (userData) {
      return this.isAuthenticated();
    } else {
      return false;
    }
  }
}
