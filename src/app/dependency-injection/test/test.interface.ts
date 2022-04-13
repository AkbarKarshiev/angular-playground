import { InjectionToken } from "@angular/core";

export interface TestInterface {
  title: string;
  desc: string;
}

export const TEST_VAL = new InjectionToken<TestInterface>('TestInterface');

export const TestInterfaceVal: TestInterface = {
  title: 'Test title',
  desc: 'Test desc'
}