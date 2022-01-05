import { ActionReducerMap } from '@ngrx/store';
import * as fromUserCards from './user-cards/user-cards.reducers';
import * as fromCounter from './counter/counter.reducers';

export interface AppState {
  userCards: fromUserCards.UserCardsState;
  counter: fromCounter.CounterState
}

export const appReducer: ActionReducerMap<AppState> = {
  userCards: fromUserCards.UserCardsReducers,
  counter: fromCounter.CounterReducers
};
