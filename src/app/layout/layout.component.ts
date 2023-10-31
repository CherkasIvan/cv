import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

import { fadeAnimation } from '@core/animations/route-animation';
import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';

import { localStorageService } from '@shared/services/localstorage/local-storage.service';

@Component({
  selector: 'cv-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnDestroy {
  public currentTheme$: BehaviorSubject<boolean> =
    this._darkModeService.isDark$;
  public currentRoute!: string;
  public isAuth = false;
  public isPwaView = false;

  private routerSubscription$: Subscription = new Subscription();

  constructor(
    private readonly _router: Router,
    private readonly _darkModeService: DarkModeService,
    private _localStorageService: localStorageService
  ) {
    this.routerSubscription$.add(
      this._router.events.subscribe((event) => {
        event instanceof NavigationEnd ? (this.currentRoute = event.url) : null;
        this._localStorageService.setRout(this.currentRoute);
      })
    );
  }

  public getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['state'];
  }

  ngOnDestroy(): void {
    this.routerSubscription$.unsubscribe();
  }
}
