import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';

import { BehaviorSubject, filter } from 'rxjs';

import { DarkModeService } from '../services/dark-mode/dark-mode.service';
import { AuthService } from '../auth/services/auth.service';
import { fadeAnimation } from '../animations/route-animation';
import { Store } from '@ngrx/store';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeAnimation]
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public currentRoute!: string;
  public currentTheme$: BehaviorSubject<boolean> = this.darkModeService.isDark$;
  public isAuth = false;
  public isPwaView = false;

  constructor(
    private router: Router,
    private darkModeService: DarkModeService,
    private firebaseService: FirebaseService,
    public authService: AuthService,
    private contexts: ChildrenOutletContexts,
    private store$: Store
  ) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: { url: string }) => {
        this.currentRoute = event.url;
      });
  }

  public getState(outlet: any) {
    console.log(outlet.activatedRouteData.state)
    return outlet.activatedRouteData.state;
  }
}
