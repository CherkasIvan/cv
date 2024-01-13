import { Observable, Subscription } from 'rxjs';

import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { AuthService } from '@auth/services/auth.service';

import { routeAnimations } from '@core/animations/route-animation';

import { ModalOutletComponent } from '@layout/components/modal-outlet/modal-outlet.component';

import { INavigation } from '@shared/models/navigation.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { localStorageService } from '@shared/services/localstorage/local-storage.service';

import { BackgroundsComponent } from './components/backgrounds/backgrounds.component';
import { FooterComponent } from './components/footer/footer.component';
import { InitialContentComponent } from './components/initial-content/initial-content.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { darkModeSelector } from './store/dark-mode-store/dark-mode.selectors';
import { setLogoutDialogSuccess } from './store/logout-button-store/logout-button.actions';
import { logoutButtonSelector } from './store/logout-button-store/logout-button.selectors';
import { ILogoutButton } from './store/model/logout-button.interface';

@Component({
    selector: 'cv-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    animations: [routeAnimations],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgClass,
        NavigationPanelComponent,
        SpinnerComponent,
        NgIf,
        InitialContentComponent,
        ModalOutletComponent,
        RouterOutlet,
        SpinnerComponent,
        FooterComponent,
        BackgroundsComponent,
        AsyncPipe,
    ],
})
export class LayoutComponent implements OnDestroy, OnInit {
    @HostBinding('@fadeAnimation') fade = 'in';

    public currentTheme$ = this._store$.pipe(select(darkModeSelector));
    public navigation$: Observable<INavigation[]> =
        this._firebaseService.getNavigation();
    public currentRoute!: string;
    public isAuth = false;
    public isPwaView = false;
    public showLogoutModal$: Observable<boolean> = this._store$.pipe(
        select(logoutButtonSelector),
    );

    private routerSubscription$: Subscription = new Subscription();

    constructor(
        private readonly _router: Router,
        private readonly _localStorageService: localStorageService,
        private readonly _firebaseService: FirebaseService,
        private readonly _store$: Store<ILogoutButton | any>,
        private readonly _authService: AuthService,
    ) {
        this.routerSubscription$.add(
            this._router.events.subscribe((event) => {
                event instanceof NavigationEnd
                    ? (this.currentRoute = event.url)
                    : null;
                this._localStorageService.setRout(this.currentRoute);
            }),
        );
    }

    ngOnInit() {
        console.log(
            this.showLogoutModal$.subscribe((el: unknown) => console.log(el)),
        );

        console.log(
            this.currentTheme$.subscribe((el: unknown) => console.log(el)),
        );
    }

    public confirmLogout() {
        this._authService.signOut();
        this._store$.dispatch(setLogoutDialogSuccess(false));
    }

    public closeLogoutDialog() {
        this._store$.dispatch(setLogoutDialogSuccess(false));
    }

    prepareRoute(outlet: RouterOutlet) {
        return (
            outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation']
        );
    }

    ngOnDestroy(): void {
        this.routerSubscription$.unsubscribe();
    }
}
