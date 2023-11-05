import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
    ScreenTrackingService,
    UserTrackingService
} from '@angular/fire/analytics';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/services/auth.service';
import { CoreModule } from './core/core.module';
import { entityConfig } from './entity-metadata';
import { globalSetReducers } from './layout/store';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            defaultLanguage: 'ru'
        }),
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        BrowserModule,
        CoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([]),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        StoreModule.forRoot(globalSetReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production // Restrict extension to log-only mode
        }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        EntityDataModule.forRoot(entityConfig),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [AuthService, ScreenTrackingService, UserTrackingService],
    bootstrap: [AppComponent]
})
export class AppModule {}
