import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomTooltipDirective]'
})
export class CustomTooltipDirectiveDirective {

  @Input('appCustomTooltipDirective')
  appCustomTooltipText: string;

  elToolTip: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.elToolTip) {
      this.showHint();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.elToolTip) {
      this.hideHint();
    }
  }

  showHint() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.elToolTip, 'tooltip-show');
  }

  hideHint() {
    this.renderer.removeClass(this.elToolTip, 'tooltip-show');
    setTimeout(() => {
      this.renderer.removeChild(document.body, this.elToolTip);
      this.elToolTip = null;
    }, 100);
  }

  create() {
    // Creating span node and appending input text to it
    this.elToolTip = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.elToolTip,
      this.renderer.createText(this.appCustomTooltipText)
    );

    // Appending tooltip span to body element
    this.renderer.appendChild(document.body, this.elToolTip);
    this.renderer.addClass(this.elToolTip, 'tooltip');

    // delay animation
    this.renderer.setStyle(this.elToolTip, '-webkit-transition', `opacity ${100}ms`);
    this.renderer.setStyle(this.elToolTip, '-moz-transition', `opacity ${100}ms`);
    this.renderer.setStyle(this.elToolTip, '-o-transition', `opacity ${100}ms`);
    this.renderer.setStyle(this.elToolTip, 'transition', `opacity ${100}ms`);
  }

  setPosition() {
    // Getting position of current element
    let hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    let tooltipPos= this.elToolTip.getBoundingClientRect();

    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top = hostPos.bottom + 2;
    let left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;

    this.renderer.setStyle(this.elToolTip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
  }
}
