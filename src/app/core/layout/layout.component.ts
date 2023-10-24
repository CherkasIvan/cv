import {  Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Observable, filter } from 'rxjs';

import { DarkModeService } from '../services/dark-mode/dark-mode.service';
import { AuthService } from '../auth/services/auth.service';
import { fadeAnimation } from '../animations/route-animation';
import { Store } from '@ngrx/store';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { ISocialMediaLinks } from '@shared/models/links.interface';

@Component({
  selector: 'cv-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeAnimation]
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public currentRoute!: string;
  public currentTheme!: boolean;
  public isAuth = false;
  public isPwaView = false;
  public socialMediaLinksL$: Observable<ISocialMediaLinks[]> = this.firebaseService.getSocialMediaLinks();
  public socialMediaLinksR$: Observable<ISocialMediaLinks[]> = this.firebaseService.getSocialMediaLinks()
  // public currentRoute$: any = this.store$.pipe(select(selectCurrentRoute));

  constructor(
    private router: Router,
    private darkModeService: DarkModeService,
    private firebaseService: FirebaseService,
    public authService: AuthService,
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

  // public getSocialMediaLinks() {
  //   this.firebaseService
  //     .getSocialMediaLinks()
  //     .subscribe((socialMediaLinks) => {
  //       const [evenNumbers, oddNumbers] = socialMediaLinks.reduce(
  //         (acc: any, val: any, index: number) => {
  //           acc[index % 2].push(val);
  //           return acc;
  //         },
  //         [[], []]
  //       );
  //       this.socialMediaLinksL$ = evenNumbers
  //       this.socialMediaLinksR$ = oddNumbers
  //     });
  // }

  // ngOnInit(): void {
  //   this.getSocialMediaLinks();
  // }
}
