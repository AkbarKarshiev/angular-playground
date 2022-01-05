import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { CounterState } from "../store/counter/counter.reducers";
import * as CounterActions from "../store/counter/counter.actions";
import * as CounterSelectors from "../store/counter/counter.selectors";

@Component({
  selector: 'app-counter-name',
  templateUrl: './counter-name.component.html',
  styleUrls: ['./counter-name.component.scss']
})
export class CounterNameComponent implements OnInit {
  counterName$ = this.store.select(CounterSelectors.getNameState);
  constructor(private store: Store<{ counter: CounterState}>) { }

  ngOnInit(): void {}

  onChangeName() {
    this.store.dispatch(CounterActions.changeName());
  }
}
