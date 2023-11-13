import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import {
    HttpClient,
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import {
    ScreenTrackingService,
    UserTrackingService,
} from '@angular/fire/analytics';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideFirestore } from '@angular/fire/firestore';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
            BrowserModule,
            AngularFireModule.initializeApp(environment.firebase),
            provideFirebaseApp(() => initializeApp(environment.firebase)),
            provideAuth(() => getAuth()),
            provideFirestore(() => getFirestore()),
            provideDatabase(() => getDatabase()),
            StoreModule.forRoot(globalSetReducers),
            StoreModule.forFeature(githubReposFeatureKey, githubReducer),
            StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: environment.production, // Restrict extension to log-only mode
            }),
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
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(mainRoutes),
    ],
})
    .then(() => {
        if ('serviceWorker' in navigator && environment.production) {
            navigator.serviceWorker.register('/ngsw-worker.js');
        }
    })
    .catch((err) => console.log(err));
