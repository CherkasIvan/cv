import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { DarkModeSelectorComponent } from '@core/components/dark-mode-selector/dark-mode-selector.component';

import { environment } from '@env/environment';

import { AppComponent } from '@app/app.component';

import { routes } from './app/app-routing.module';
import { AppModule } from './app/app.module';
import { provideEffects } from '@ngrx/effects';

// platformBrowserDynamic()
//     .bootstrapModule(AppModule)
//     .then(() => {
//         if ('serviceWorker' in navigator && environment.production) {
//             navigator.serviceWorker.register('/ngsw-worker.js');
//         }
//     })
//     .catch((err) => console.log(err));

bootstrapApplication(AppComponent, {
    providers: [provideStore(),provideEffects(),provideRouter(routes, withEnabledBlockingInitialNavigation())]
}).catch((err) => console.log(err));
