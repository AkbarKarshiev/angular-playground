import { createAction, props } from "@ngrx/store";

export enum CounterActionsTypes {
  IncrementCounter = '[Counter] Increment',
  DecrementCounter = '[Counter] Decrement',
  ResetCounter = '[Counter] Reset',
  AddValueToCounter = '[Counter] AddValue',
  ChangeNameCounter = '[Counter] ChangeName',
}

export const incrementCounter = createAction(CounterActionsTypes.IncrementCounter);
export const decrementCounter = createAction(CounterActionsTypes.DecrementCounter);
export const resetCounter = createAction(CounterActionsTypes.ResetCounter);
export const changeName = createAction(CounterActionsTypes.ChangeNameCounter);

export const addValueToCounter = createAction(
  CounterActionsTypes.AddValueToCounter,
  props<{ value: number }>()
);
