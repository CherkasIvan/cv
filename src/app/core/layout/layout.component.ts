import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs';

import { DarkModeService } from '../services/dark-mode.service';
import { AuthService } from '../auth/services/auth.service';
import { NavigationService } from './services/navigation.service';

import { routerTransition } from '../animations/route-animation';

@Component({
  selector: 'cv-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routerTransition()]
})
export class LayoutComponent implements OnInit {
  public currentRoute!: string;
  public currentTheme!: boolean;
  public isAuth: boolean = false;

  constructor(
    private router: Router,
    private darkModeService: DarkModeService,
    public authService: AuthService,
    private navigationService: NavigationService
  ) {
    this.darkModeService.isDark$.subscribe(
      (theme) => (this.currentTheme = theme)
    );
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: { url: string }) => {
        this.currentRoute = event.url;
      });
  }

  getRouteAnimation(outlet: any) {
    return this.navigationService.animationValue;
  }

  ngOnInit(): void {
    // this.isAuth = this.authService.isAuth$.value;
  }
}
