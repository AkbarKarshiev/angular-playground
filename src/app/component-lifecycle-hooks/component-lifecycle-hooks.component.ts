import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle-hooks',
  templateUrl: './component-lifecycle-hooks.component.html',
  styleUrls: ['./component-lifecycle-hooks.component.scss']
})
export class ComponentLifecycleHooksComponent implements OnInit {
  version = VERSION.major;

  constructor() { }

  ngOnInit(): void {
  }

}
