import { Inject, Injectable, Optional } from '@angular/core';
import { TEST_VAL, TestInterface, TestInterfaceVal } from "../test/test.interface";

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  private _randomNo = 0;
  private readonly testVal: TestInterface;
  constructor(
    @Optional() @Inject(TEST_VAL) testVal: TestInterface | null
  ) {
    this.testVal = testVal ?? TestInterfaceVal;
    this._randomNo = Math.floor(Math.random() * 1000 + 1);
    console.log("RandomService Constructed with val: " + this._randomNo);
  }

  get RandomNo() {
    return this._randomNo;
  }
}
