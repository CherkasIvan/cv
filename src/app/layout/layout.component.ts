import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

import { fadeAnimation } from '@core/animations/route-animation';
import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';

import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'cv-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  public currentRoute!: string;
  public currentTheme$: BehaviorSubject<boolean> =
    this._darkModeService.isDark$;
  public isAuth = false;
  public isPwaView = false;

  constructor(
    private readonly _router: Router,
    private readonly _darkModeService: DarkModeService,
    public authService: AuthService
  ) {
    this._router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: { url: string }) => {
        this.currentRoute = event.url;
      });
  }

  public getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['state'];
  }
}
