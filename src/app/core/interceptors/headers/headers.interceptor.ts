import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Octokit } from 'octokit';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const octokit = new Octokit({
      auth: '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',
    });
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
        Authorization: `Bearer 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`,
      }),
    });

    console.log('Intercepted HTTP call', authReq);

    return next.handle(authReq);
  }
}
