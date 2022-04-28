import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ac-child',
  templateUrl: './ac-child.component.html',
  styleUrls: ['./ac-child.component.scss']
})
export class AcChildComponent implements OnInit {
  @Input() customTemplate: TemplateRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
  }

}
