import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.reducer";

import * as userCardSelector from '../store/user-cards/user-cards.selectors'
import * as userCardActions from '../store/user-cards/user-cards.actions'

@Component({
  selector: 'app-store-test',
  templateUrl: './store-test.component.html',
  styleUrls: ['./store-test.component.scss']
})
export class StoreTestComponent implements OnInit {
  userCardsArray$ = this.store.select(userCardSelector.getUserCardsArrayState);
  userCardsLoading$ = this.store.select(userCardSelector.getUserCardsLoadingState);
  userCardsErrorMsg$ = this.store.select(userCardSelector.getUserCardsErrorMsgState);
  uzcardCardsLoading$ = this.store.select(userCardSelector.getUzcardCardsLoadingState);
  humoCardsLoading$ = this.store.select(userCardSelector.getHumoCardsLoadingState);
  attoCardsLoading$ = this.store.select(userCardSelector.getAttoCardsLoadingState);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.dispatch(userCardActions.fetchUserCardsStart());
    this.store.dispatch(userCardActions.fetchUserCardsStart());
  }

  onFetchBalances() {
    this.store.dispatch(userCardActions.fetchUserCardsBalanceStart());
  }
}
