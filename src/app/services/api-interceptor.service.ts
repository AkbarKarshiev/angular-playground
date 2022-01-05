import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {

  constructor(
  ) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers
        .set('X-Mobile-AppVersion', '1')
        .set('X-Mobile-Lang', 'ru')
        .set('X-Mobile-Model', this.myBrowser())
        .set('X-Mobile-OSVersion', this.getBrowserVersion())
        .set('X-Mobile-PushToken', '1')
        .set('X-Mobile-Type', 'web')
        .set('X-Mobile-UID', 'web')
        .set('X-Mobile-UID', 'web')
        .set('Authorization', 'Bearer ' + 'dRBZsIpQ3awt95f9jEHXYcQxA69LahLj')
    });
    return next.handle(authReq);
  }

  myBrowser(): string {
    if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) !== -1 ) {
      return 'Opera';
    }else if (navigator.userAgent.indexOf('Chrome') !== -1 ){
      return 'Chrome';
    }else if (navigator.userAgent.indexOf('Safari') !== -1){
      return 'Safari';
    }else if (navigator.userAgent.indexOf('Firefox') !== -1 ) {
      return 'Firefox';
    } else {
      return 'unknown';
    }
  }

  getBrowserVersion(): string {
    const userAgent = navigator.userAgent;
    let tem;
    let matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(matchTest[1])) {
      tem =  /\brv[ :]+(\d+)/g.exec(userAgent) || [];
      return 'IE ' + (tem[1] || '');
    }
    if (matchTest[1] === 'Chrome') {
      tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) { return tem.slice(1).join(' ').replace('OPR', 'Opera'); }
    }
    matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if (( tem = userAgent.match(/version\/(\d+)/i)) != null) { matchTest.splice(1, 1, tem[1]); }
    return matchTest.join(' ');
  }
}
