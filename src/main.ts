import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRouterStateSerializer } from '@store/router-store/router.serializer';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import {
    HttpClient,
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import {
    ScreenTrackingService,
    UserTrackingService,
} from '@angular/fire/analytics';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideFirestore } from '@angular/fire/firestore';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import {
    StoreRouterConnectingModule,
    provideRouterStore,
    routerReducer,
} from '@ngrx/router-store';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { GithubEffects } from '@pages/projects/projects-store/github.effects';
import {
    githubReducer,
    githubReposFeatureKey,
} from '@pages/projects/projects-store/github.reducers';

import { environment } from '@env/environment';

import { mainRoutes } from '@app/app-routing.routes';
import { AppComponent } from '@app/app.component';

import { AuthService } from './app/auth/services/auth.service';
import { entityConfig } from './app/entity-metadata';
import { globalSetReducers } from './app/layout/store';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient],
                },
                defaultLanguage: 'ru',
            }),
            AngularFireModule.initializeApp(environment.firebase),
            provideFirebaseApp(() => initializeApp(environment.firebase)),
            provideAuth(() => getAuth()),
            provideFirestore(() => getFirestore()),
            provideDatabase(() => getDatabase()),
            StoreModule.forRoot(globalSetReducers),
            StoreModule.forFeature(githubReposFeatureKey, githubReducer),
            EffectsModule.forRoot([GithubEffects]),
            StoreRouterConnectingModule.forRoot(),
            EntityDataModule.forRoot(entityConfig),
            ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: environment.production,
                registrationStrategy: 'registerWhenStable:30000',
            }),
        ),
        AuthService,
        ScreenTrackingService,
        UserTrackingService,
        provideAnimations(),
        provideRouterStore({ serializer: AppRouterStateSerializer }),
        provideStore({ router: routerReducer }),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(mainRoutes),
        provideStoreDevtools({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        }),
    ],
})
    .then(() => {
        if ('serviceWorker' in navigator && environment.production) {
            navigator.serviceWorker.register('/ngsw-worker.js');
        }
    })
    .catch((err) => console.log(err));
