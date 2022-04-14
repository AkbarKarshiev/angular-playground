import { Directive } from '@angular/core';
import { RandomService } from "../services/random.service";

@Directive({
  selector: '[bDir]',
  providers: [RandomService],
})
export class BDirective {

  constructor(private randomService: RandomService) {
    console.log('From bDir => ' + this.randomService.RandomNo);
  }

}
