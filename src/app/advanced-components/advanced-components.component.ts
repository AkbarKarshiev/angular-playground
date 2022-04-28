import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-advanced-components',
  templateUrl: './advanced-components.component.html',
  styleUrls: ['./advanced-components.component.scss']
})
export class AdvancedComponentsComponent implements OnInit, AfterViewInit {
  @ViewChild('testHeading') titleRef: ElementRef<HTMLElement>;
  @ViewChild('sayHelloTemplate') templateRef: TemplateRef<any>;
  selected = true;

  constructor(private vref: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    console.log(this.vref)
    console.log(this.titleRef)
    console.log(this.templateRef)
  }
}
