import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { finalize, Observable } from 'rxjs';

import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(this.totalRequests);
    this.totalRequests++;
    this.spinnerService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        console.log(this.totalRequests);
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.spinnerService.setLoading(false);
        }
      })
    );
  }
}
