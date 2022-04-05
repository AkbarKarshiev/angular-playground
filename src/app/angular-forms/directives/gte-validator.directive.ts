import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[gteValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: GteValidatorDirective, multi: true }
  ]
})
export class GteValidatorDirective implements Validator{
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let v: number = +control.value;

    if (isNaN(v)) {
      return { gte: true, requiredValue: 10 };
    }

    if (v <= +10) {
      return { gte: true, requiredValue: 10 }
    }

    return null;
  }
}
