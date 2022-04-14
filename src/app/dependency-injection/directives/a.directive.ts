import { Directive, Host } from '@angular/core';
import { RandomService } from "../services/random.service";

@Directive({
  selector: '[aDir]',
})
export class ADirective {

  constructor(private randomService: RandomService) {
    console.log('From aDir => ' + this.randomService.RandomNo);
  }

}
