import { createReducer, on } from "@ngrx/store";
import * as CounterActions from './counter.actions';

export interface CounterState {
  counter: number;
  name: string;
}

export const initialState: CounterState = {
  counter: 0,
  name: 'Hello world'
};

export const CounterReducers = createReducer(
  initialState,
  on(CounterActions.incrementCounter, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  on(CounterActions.decrementCounter, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }),
  on(CounterActions.resetCounter, (state) => {
    return {
      ...state,
      counter: 0
    }
  }),
  on(CounterActions.addValueToCounter, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }),
  on(CounterActions.changeName, (state, action) => {
    return {
      ...state,
      name: 'Hello Akbar'
    }
  })
)
