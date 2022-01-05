import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromUserCards from "./user-cards.reducers";

const getUserCardsArray = (state: fromUserCards.UserCardsState) => state.cards;
const getUserCardsLoading = (state: fromUserCards.UserCardsState) => state.loading;
const getUserCardsErrorMsg= (state: fromUserCards.UserCardsState) => state.errorMsg;
const getUzcardCardsLoading= (state: fromUserCards.UserCardsState) => state.uzcardBalance.loading;
const getHumoCardsLoading= (state: fromUserCards.UserCardsState) => state.humoBalance.loading;
const getAttoCardsLoading= (state: fromUserCards.UserCardsState) => state.attoBalance.loading;

export const getUserCardsState = createFeatureSelector<fromUserCards.UserCardsState>("userCards");

export const getUserCardsArrayState = createSelector(
  getUserCardsState,
  getUserCardsArray
);

export const getUserCardsLoadingState = createSelector(
  getUserCardsState,
  getUserCardsLoading
);

export const getUserCardsErrorMsgState = createSelector(
  getUserCardsState,
  getUserCardsErrorMsg
);

export const getUzcardCardsLoadingState = createSelector(
  getUserCardsState,
  getUzcardCardsLoading
);

export const getHumoCardsLoadingState = createSelector(
  getUserCardsState,
  getHumoCardsLoading
);

export const getAttoCardsLoadingState = createSelector(
  getUserCardsState,
  getAttoCardsLoading
);

