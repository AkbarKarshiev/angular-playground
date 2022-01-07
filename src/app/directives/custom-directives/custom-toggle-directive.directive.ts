import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomToggleDirective]'
})
export class CustomToggleDirectiveDirective implements OnInit {
  private elementSelected = false;

  constructor(private element: ElementRef) { }

  ngOnInit() {

  }

  @HostListener('click')
  private onClick() {
    this.elementSelected = !this.elementSelected;
    if (this.elementSelected) {
      this.element.nativeElement.classList.add('toggle');
    } else {
      this.element.nativeElement.classList.remove('toggle');
    }
  }
}
