import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCounter from "./counter.reducers";

const getCounterValue = (state: fromCounter.CounterState) => state.counter;
const getNameValue = (state: fromCounter.CounterState) => state.name;


export const getCounterState = createFeatureSelector<fromCounter.CounterState>('counter');

export const getCounterValueState = createSelector(
  getCounterState,
  getCounterValue
);

export const getNameState = createSelector(
  getCounterState,
  getNameValue
);

