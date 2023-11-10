import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SnackbarService } from '@shared/services/snackbar/snackbar.service';

import { ModalHostComponent } from './components/modal-outlet/modal-host.component';
import { ModalOutletComponent } from './components/modal-outlet/modal-outlet.component';
import { ModalPortalDirective } from './directives/modal-portal/modal-portal.directive';
import { SliderBehaviorDirective } from './directives/slider/slider-behavior.directive';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
    exports: [MatDialogModule, CommonModule],
    imports: [
        MatDialogModule,
        MatSnackBarModule,
        CommonModule,
        SliderBehaviorDirective,
        ModalPortalDirective,
    ],
    providers: [
        MatSnackBarModule,
        SnackbarService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
    ],
})
export class CoreModule {}
