import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs';

import { DarkModeService } from '../services/dark-mode/dark-mode.service';
import { AuthService } from '../auth/services/auth.service';
import { fadeAnimation } from '../animations/route-animation';
import { Store } from '@ngrx/store';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeAnimation],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  public currentRoute!: string;
  public currentTheme!: boolean;
  public isAuth = false;
  public isPwaView = false;
  public socialLinks!: any[]
  // public currentRoute$: any = this.store$.pipe(select(selectCurrentRoute));

  constructor(
    private router: Router,
    private darkModeService: DarkModeService,
    private firebaseService: FirebaseService,
    public authService: AuthService,
    private contexts: ChildrenOutletContexts,
    private store$: Store
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

  public getSocialMediaLinks() {
    this.firebaseService
      .getSocialMediaLinks()
      .subscribe((socialMediaLinks) => (this.socialLinks = socialMediaLinks));
  }

  ngOnInit(): void {
    this.getSocialMediaLinks();
  }
}
