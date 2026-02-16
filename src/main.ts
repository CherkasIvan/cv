import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import {
    HTTP_INTERCEPTORS,
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
import {
    bootstrapApplication,
    provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { createTranslateLoader } from '@app/core/translate-loader/translate-loader.service';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { mainRoutes } from './app/app-routing.routes';
import { AppComponent } from './app/app.component';
import { AuthService } from './app/auth/services/auth.service';
import { LoadingInterceptor } from './app/core/interceptors/loading.interceptor';
import { entityConfig } from './app/entity-metadata';
import { darkModeReducer } from './app/layout/store/dark-mode-store/dark-mode.reducers';
import { languageSelectorReducer } from './app/layout/store/language-selector-store/language-selector.reducers';
import { logoutButtonReducer } from './app/layout/store/logout-button-store/logout-button.reducers';
import { spinnerReducer } from './app/layout/store/spinner-store/spinner.reducer';
import { GithubEffects } from './app/pages/projects/projects-store/github.effects';
import {
    githubReducer,
    githubReposFeatureKey,
} from './app/pages/projects/projects-store/github.reducers';
import { AppRouterStateSerializer } from './app/store/router-store/router.serializer';
import { environment } from './environments/environment';

// Фабрика для загрузки переводов
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader();
}

bootstrapApplication(AppComponent, {
    providers: [
        // Firebase провайдеры
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),

        // Импорт модулей
        importProvidersFrom(
            AngularFireModule.initializeApp(environment.firebase),
            TranslateModule.forRoot({
                fallbackLang: 'en',
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            }),
            StoreModule.forRoot({}),
            StoreModule.forFeature(githubReposFeatureKey, githubReducer),
            StoreModule.forFeature('darkMode', darkModeReducer),
            StoreModule.forFeature('language', languageSelectorReducer),
            StoreModule.forFeature('isLogout', logoutButtonReducer),
            StoreModule.forFeature('spinner', spinnerReducer),
            EffectsModule.forRoot([GithubEffects]),
            EntityDataModule.forRoot(entityConfig),
            ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: environment.production,
                registrationStrategy: 'registerWhenStable:30000',
            }),
        ),

        // Интерсепторы
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },

        // Сервисы
        AuthService,
        ScreenTrackingService,
        UserTrackingService,

        // Провайдеры функций
        provideAnimations(),
        provideRouterStore({ serializer: AppRouterStateSerializer }),
        provideStore({ router: routerReducer }),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(mainRoutes),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75,
        }),
        provideClientHydration(),
    ],
}).catch((err) => console.error(err));
