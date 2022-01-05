import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { map, switchMap, mergeMap, take } from 'rxjs/operators';
import {Store} from '@ngrx/store';
import { of } from "rxjs";

import * as fromApp from '../app.reducer';
import * as UserCardsActions from './user-cards.actions';
import {UserCardsService} from '../../services/user-cards.service';
import * as userCardSelector from "./user-cards.selectors";


@Injectable()
export class UserCardsEffects {

  fetchUserCardsWithBalance$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserCardsActions.fetchUserCardsStart),
      switchMap(() => {
        return this.userCardsService.getUserCards()
          .pipe(
            map((resData: any) => {
              if (resData.success) {
                return UserCardsActions.fetchUserCardsSuccess({cards: resData.data.cards});
              } else {
                return UserCardsActions.fetchUserCardsFail({errorMsg: resData.error.message});
              }
            })
          )
      })
    )
  })


  // @ts-ignore
  fetchUserCardsWithBalanceStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserCardsActions.fetchUserCardsSuccess),
      switchMap(() => {
        return of(UserCardsActions.fetchUserCardsBalanceStart());
      })
    )
  })

  fetchCardsBalance = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserCardsActions.fetchUserCardsBalanceStart),
      switchMap(() => {
        return this.store.select(userCardSelector.getUserCardsArrayState).pipe(take(1))
      }),
      mergeMap((userCards) => {
        if (userCards && userCards.length) {
          const returnArr = [];
          const uzcardCardIds = userCards.filter((elem: any) => elem.type === 'uzcard').map((elem: any) => elem.id);
          const humoCardIds = userCards.filter((elem: any) => elem.type === 'humo').map((elem: any) => elem.id);
          const attoCardIds = userCards.filter((elem: any) => elem.type === 'atto').map((elem: any) => elem.id);
          if (uzcardCardIds.length) {
            returnArr.push(UserCardsActions.fetchUserCardsBalanceById({ids: uzcardCardIds, cardType: 'uzcard'}));
          }
          if (humoCardIds.length) {
            returnArr.push(UserCardsActions.fetchUserCardsBalanceById({ids: humoCardIds, cardType: 'humo'}));
          }
          if (attoCardIds) {
            returnArr.push(UserCardsActions.fetchUserCardsBalanceById({ids: attoCardIds, cardType: 'atto'}))
          }
          return returnArr;
        } else  {
          return [UserCardsActions.fetchUserCardsBalanceFail({errorMsg: 'No Cards', cardType: 'none'})];
        }
      })
    )
  })

  // @ts-ignore
  fetchCardsBalanceById = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserCardsActions.fetchUserCardsBalanceById),
      mergeMap((action) => {
        return this.userCardsService.getUserCardsBalance(action.ids)
          .pipe(
            map((resData: any) => {
              if (resData.success) {
                return UserCardsActions.fetchUserCardsBalanceSuccess({cardBalances: resData.data.cards, cardType: action.cardType});
              } else {
                return UserCardsActions.fetchUserCardsBalanceFail({errorMsg: resData.error.message, cardType: action.cardType});
              }
            })
          )
      })
    )
  });

  constructor(
    private actions$: Actions,
    private userCardsService: UserCardsService,
    private store: Store<fromApp.AppState>
  ) {
  }
}
