import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SnackbarService } from '@shared/services/snackbar/snackbar.service';

import { SliderBehaviorDirective } from './directives/slider/slider-behavior.directive';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import {
    DarkModeState,
    LanguageModeState,
    darkMode,
    languageMode
} from './store';

@NgModule({
    declarations: [SliderBehaviorDirective],
    exports: [MatDialogModule, CommonModule],
    imports: [
        RouterModule,
        MatDialogModule,
        MatSnackBarModule,
        CommonModule,
        StoreModule.forFeature<DarkModeState>('darkMode', darkMode),
        StoreModule.forFeature<LanguageModeState>(
            'languageSelector',
            languageMode
        )
    ],
    providers: [
        MatSnackBarModule,
        SnackbarService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {}
