import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective implements OnInit {

  @Input() appCustomAttributeDirective: string = '';

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.classList.add(this.appCustomAttributeDirective);
  }
}
