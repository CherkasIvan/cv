import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingInterceptor } from './interceptors/loading.interceptor';

import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { SliderBehaviorDirective } from './directives/slider-behavior.directive';

@NgModule({
  declarations: [SliderBehaviorDirective],
  exports: [MatDialogModule, CommonModule],
  imports: [AuthModule, RouterModule, MatDialogModule, CommonModule],
  providers: [
    MatSnackBarModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
