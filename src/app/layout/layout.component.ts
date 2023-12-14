import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    OnDestroy,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { AuthService } from '@auth/services/auth.service';

import { routeAnimations } from '@core/animations/route-animation';
import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';

import { ModalOutletComponent } from '@layout/components/modal-outlet/modal-outlet.component';

import { INavigation } from '@shared/models/navigation.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { localStorageService } from '@shared/services/localstorage/local-storage.service';

import { LoadingInterceptor } from '@app/core/interceptors/loading.interceptor';

import { BackgroundsComponent } from './components/backgrounds/backgrounds.component';
import { FooterComponent } from './components/footer/footer.component';
import { InitialContentComponent } from './components/initial-content/initial-content.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
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
    providers: [
        // Подключаем интерцептор AuthInterceptor к HTTP-запросам
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
    ],
})
export class LayoutComponent implements OnDestroy {
    @HostBinding('@fadeAnimation') fade = 'in';

    public currentTheme$: BehaviorSubject<boolean> =
        this._darkModeService.isDark$;
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
        private readonly _darkModeService: DarkModeService,
        private readonly _localStorageService: localStorageService,
        private readonly _firebaseService: FirebaseService,
        private readonly _store$: Store<ILogoutButton>,
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
