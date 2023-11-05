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
import { State, reducers } from './store';
import { darkModeReducer } from './store/dark-mode-store/dark-mode.reducers';

@NgModule({
    declarations: [SliderBehaviorDirective],
    exports: [MatDialogModule, CommonModule],
    imports: [
        RouterModule,
        MatDialogModule,
        MatSnackBarModule,
        CommonModule,
        StoreModule.forFeature<State>('darkMode', reducers)
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
