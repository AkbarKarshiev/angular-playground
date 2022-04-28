import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ac-example-child',
  templateUrl: './ac-example-child.component.html',
  styleUrls: ['./ac-example-child.component.scss']
})
export class AcExampleChildComponent {
  @Input() items: any[] = [];
  @Input() itemTemplate: TemplateRef<HTMLElement>;
}
