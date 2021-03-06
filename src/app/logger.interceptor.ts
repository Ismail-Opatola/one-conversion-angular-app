import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(`logger intercepted your ${request.method} request made to ${request.url}`);

    // this is not the correct way to perform token refresh, just the concept

    let httpAuth = request.headers.get('Authorization');

    // use-case - refresh access-token, validate token
    httpAuth = `adding-new-token ${httpAuth}`;

    request.headers.set('Authorization', httpAuth);
    console.log(request);

    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          // 401 handled in auth.interceptor - Unauthorized client error status response code
          // this is just a logger interceptor
          console.log(error.message);
        }
        return throwError(error);
      })
    );
  }
}
