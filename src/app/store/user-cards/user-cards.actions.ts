import { createAction, props } from '@ngrx/store';
import { UserCard } from '../../models/user-card.models'

export enum UserCardsActionsTypes {
  FetchUserCardsStart = '[UserCards] FetchUserCards Start',
  FetchUserCardsSuccess = '[UserCards] FetchUserCards Success',
  FetchUserCardsFail = '[UserCards] FetchUserCards Fail',
  FetchUserCardsBalanceStart = '[UserCards] FetchUserCards Balance Start',
  FetchUserCardsBalanceSuccess = '[UserCards] FetchUserCards Balance Success',
  FetchUserCardsBalanceFail = '[UserCards] FetchUserCards Balance Fail',

  FetchUserCardsWithBalanceById = '[UserCards] FetchUserCards With Balance By Id',
}

export const fetchUserCardsStart = createAction(
  UserCardsActionsTypes.FetchUserCardsStart
);

export const fetchUserCardsSuccess = createAction(
  UserCardsActionsTypes.FetchUserCardsSuccess,
  props<{ cards: UserCard[] }>()
);

export const fetchUserCardsFail = createAction(
  UserCardsActionsTypes.FetchUserCardsFail,
  props<{ errorMsg: string }>()
);

export const fetchUserCardsBalanceStart = createAction(
  UserCardsActionsTypes.FetchUserCardsBalanceStart
);

export const fetchUserCardsBalanceSuccess = createAction(
  UserCardsActionsTypes.FetchUserCardsBalanceSuccess,
  props<{ cardBalances: any[], cardType: string }>()
);

export const fetchUserCardsBalanceFail = createAction(
  UserCardsActionsTypes.FetchUserCardsBalanceFail,
  props<{ errorMsg: string, cardType: string }>()
);

export const fetchUserCardsBalanceById = createAction(
  UserCardsActionsTypes.FetchUserCardsWithBalanceById,
  props<{ ids: number[], cardType: string }>()
);
