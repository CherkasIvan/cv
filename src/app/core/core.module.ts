import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

import { SnackbarService } from '@shared/services/snackbar/snackbar.service';

import { SliderBehaviorDirective } from './directives/slider-behavior.directive';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
    declarations: [SliderBehaviorDirective],
    exports: [MatDialogModule, CommonModule],
    imports: [RouterModule, MatDialogModule, MatSnackBarModule, CommonModule],
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
