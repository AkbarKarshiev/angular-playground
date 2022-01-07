import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructuralDirective]'
})
export class CustomStructuralDirectiveDirective {
  _condition: boolean;

  @Input()
  set appCustomStructuralDirective(condition: boolean) {
    this._condition = condition;
    this._updateView();
  }

  constructor(
    private _viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {

  }

  _updateView(): void {
    if (this._condition) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
