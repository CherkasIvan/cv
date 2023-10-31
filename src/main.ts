import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { DarkModeSelectorComponent } from '@core/components/dark-mode-selector/dark-mode-selector.component';

import { environment } from '@env/environment';

import { routes } from './app/app-routing.module';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if ('serviceWorker' in navigator && environment.production) {
      navigator.serviceWorker.register('/ngsw-worker.js');
    }
  })
  .catch((err) => console.log(err));

bootstrapApplication(DarkModeSelectorComponent, {
  providers: [provideStore()]
}).catch((err) => console.log(err));
