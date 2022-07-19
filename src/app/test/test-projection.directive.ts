import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTestProjection]'
})
export class TestProjectionDirective {
  constructor(public templateRef: TemplateRef<unknown>) { }
}
