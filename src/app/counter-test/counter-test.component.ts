import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { CounterState } from "../store/counter/counter.reducers";
import * as CounterActions from "../store/counter/counter.actions";
import * as CounterSelectors from "../store/counter/counter.selectors";

@Component({
  selector: 'app-counter-test',
  templateUrl: './counter-test.component.html',
  styleUrls: ['./counter-test.component.scss']
})
export class CounterTestComponent implements OnInit {
  valueToAdd: number | undefined;
  counter$ = this.store.select(CounterSelectors.getCounterValueState);

  constructor(private store: Store<{ counter: CounterState}>) { }

  ngOnInit(): void {

  }

  onIncrement() {
    this.store.dispatch(CounterActions.incrementCounter());
  }

  onDecrement() {
    this.store.dispatch(CounterActions.decrementCounter());
  }

  onReset() {
    this.store.dispatch(CounterActions.resetCounter());
  }

  onAddValue() {
    if (this.valueToAdd) {
      this.store.dispatch(CounterActions.addValueToCounter({value: +this.valueToAdd}));
    }
  }
}
