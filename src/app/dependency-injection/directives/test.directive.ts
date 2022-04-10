import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { RandomService } from "../services/random.service";

@Directive({
  selector: '[testDirective]'
})
export class TestDirective implements OnInit {
  @Input() ttClass: string;

  constructor(private el: ElementRef, private randomService: RandomService) {}

  ngOnInit() {
    this.el.nativeElement.innerHTML = "Directive => " + this.randomService.RandomNo;
  }
}
