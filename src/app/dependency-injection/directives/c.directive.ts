import { Directive, Host } from '@angular/core';
import { RandomService } from "../services/random.service";

@Directive({
  selector: '[cDir]'
})
export class CDirective {

  constructor(@Host() private randomService: RandomService) {
    console.log('From cDir => ' + this.randomService.RandomNo);
  }

}
