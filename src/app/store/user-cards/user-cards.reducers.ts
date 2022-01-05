import { createReducer, on } from '@ngrx/store';
import * as UserCardActions from './user-cards.actions';
import { UserCard } from "../../models/user-card.models";

export interface UserCardsState {
  cards: UserCard[] | null;
  errorMsg: string | null;
  loading: boolean;
  uzcardBalance: {
    fetched: boolean,
    loading: boolean,
    errorMsg: string | null
  };
  humoBalance: {
    fetched: boolean,
    loading: boolean,
    errorMsg: string | null
  };
  attoBalance: {
    fetched: boolean,
    loading: boolean,
    errorMsg: string | null
  };
}

export const initialState: UserCardsState = {
  cards: null,
  errorMsg: null,
  loading: false,
  uzcardBalance: {
    fetched: false,
    loading: false,
    errorMsg: null
  },
  humoBalance: {
    fetched: false,
    loading: false,
    errorMsg: null
  },
  attoBalance: {
    fetched: false,
    loading: false,
    errorMsg: null
  }
};

export const UserCardsReducers = createReducer(
  initialState,
  on(UserCardActions.fetchUserCardsStart, (state) => {
    return {
      ...state,
      errorMsg: null,
      loading: true
    }
  }),
  on(UserCardActions.fetchUserCardsSuccess, (state,  { cards }) => {
    return {
      ...state,
      cards: cards.map(elem => ({...elem, balance: null})),
      errorMsg: null,
      loading: false
    }
  }),
  on(UserCardActions.fetchUserCardsFail, (state, { errorMsg }) => {
    return {
      ...state,
      cards: null,
      errorMsg: errorMsg,
      loading: false
    }
  }),
  on(UserCardActions.fetchUserCardsBalanceStart, (state) => {
    return {
      ...state,
      uzcardBalance: {
        fetched: false,
        loading: true,
        errorMsg: null
      },
      humoBalance: {
        fetched: false,
        loading: true,
        errorMsg: null
      },
      attoBalance: {
        fetched: false,
        loading: true,
        errorMsg: null
      }
    }
  }),
  on(UserCardActions.fetchUserCardsBalanceSuccess, (state,  action) => {
    let uzcardFetchedStatus = state.uzcardBalance.fetched;
    let humoFetchedStatus = state.humoBalance.fetched;
    let attoFetchedStatus = state.attoBalance.fetched;
    // @ts-ignore
    const tempArr = state.cards.map(card => ({...card}));

    if (action.cardType === 'uzcard') {
      uzcardFetchedStatus = true;
    } else if (action.cardType === 'humo') {
      humoFetchedStatus = true;
    } else if (action.cardType === 'atto') {
      attoFetchedStatus = true;
    }

    action.cardBalances.forEach(cardBalanceElem => {
      tempArr.forEach((cardItem: UserCard , index: number, arrayCpy:  UserCard[]) => {
        if (cardBalanceElem.id === cardItem.id) {
          arrayCpy[index].balance = cardBalanceElem.balance / 100;

          if (cardBalanceElem.hasOwnProperty('can_receive_loan')) {
            arrayCpy[index].can_receive_loan = cardBalanceElem.can_receive_loan;
          }

          if (cardBalanceElem.hasOwnProperty('status')) {
            arrayCpy[index].status = cardBalanceElem.status;
          }

          if (cardBalanceElem.hasOwnProperty('details')) {
            arrayCpy[index].mfo = cardBalanceElem.details.mfo;
            arrayCpy[index].account = cardBalanceElem.details.account;
            arrayCpy[index].transit_account = cardBalanceElem.details.transit_account;
            arrayCpy[index].transit_account_y = cardBalanceElem.details.transit_account_y;
          }
        }
      });
    });

    return {
      ...state,
      cards: tempArr,
      uzcardBalance: {
        fetched: uzcardFetchedStatus,
        loading: false,
        errorMsg: null
      },
      humoBalance: {
        fetched: humoFetchedStatus,
        loading: false,
        errorMsg: null
      },
      attoBalance: {
        fetched: attoFetchedStatus,
        loading: false,
        errorMsg: null
      }
    };
  }),
  on(UserCardActions.fetchUserCardsBalanceFail, (state, action) => {
    if (action.cardType === 'uzcard') {
      return  {
        ...state,
        uzcardBalance: {
          fetched: false,
          loading: false,
          errorMsg: action.errorMsg
        }
      };
    } else if (action.cardType === 'humo') {
      return {
        ...state,
        humoBalance: {
          fetched: false,
          loading: false,
          errorMsg: action.errorMsg
        }
      };
    } else if (action.cardType === 'atto') {
      return {
        ...state,
        attoBalance: {
          fetched: false,
          loading: false,
          errorMsg: action.errorMsg
        }
      };
    }
    return  {
      ...state,
      errorMsg: action.errorMsg
    };
  }),

);

