import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingInterceptor } from './interceptors/loading.interceptor';

import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule { }
