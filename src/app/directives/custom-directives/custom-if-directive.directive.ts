import { AfterViewInit, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIfDirective]'
})
export class CustomIfDirectiveDirective implements OnInit, AfterViewInit {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  ngOnInit() {
    console.log(this.viewContainer);
    console.log(this.templateRef);
  }

  ngAfterViewInit() {
  }
}
