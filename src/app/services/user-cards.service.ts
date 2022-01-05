import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';

const BACKEND_URL_V1 = environment.BACKEND_URL_V1;
const BACKEND_URL_V2 = environment.BACKEND_URL_V2;

@Injectable({
  providedIn: 'root'
})
export class UserCardsService {
  constructor(
    private http: HttpClient
  ) {
  }

  getUserCards(): Observable<any> {
    return this.http.get<any>(BACKEND_URL_V1 + 'user/get-cards');
  }

  getUserVisaCard(): Observable<any> {
    return this.http.get<any>(BACKEND_URL_V2 + 'user/visa-cards')
  }

  getUserCardsBalance(cardsId: number[]): any {
    return this.http.post<any>(BACKEND_URL_V1 + 'card/get-balance',
      {
        ids: cardsId
      }
    );
  }
}
