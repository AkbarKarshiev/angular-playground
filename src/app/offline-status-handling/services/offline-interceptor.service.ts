import { Injectable } from '@angular/core';
import { fromEvent, Observable, throwError } from 'rxjs';
import { mapTo, retryWhen, switchMap } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class OfflineInterceptorService implements HttpInterceptor {
  private onlineChanges$ = fromEvent(window, 'online').pipe(mapTo(true));

  get isOnline(): boolean {
    return navigator.onLine;
  }

  intercept(req, next): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retryWhen(errors => {
        if (this.isOnline) {
          return errors.pipe(switchMap(err => throwError(err)));
        }

        return this.onlineChanges$;
      })
    );
  }
}
