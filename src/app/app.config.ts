import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter } from '@angular/router';

import { mainRoutes } from './app-routing.routes';
import { CustomTitleStrategy } from './custom-title-strategy';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(mainRoutes),
        provideHttpClient(),
        { provide: TitleStrategy, useClass: CustomTitleStrategy },
    ],
};
