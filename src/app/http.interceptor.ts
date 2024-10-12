// http.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Requisição HTTP:', request);

    return next.handle(request).pipe(
      tap(
        event => {
          console.log('Resposta HTTP:', event);
        },
        error => {
          console.error('Erro HTTP:', error);
        }
      )
    );
  }
}
