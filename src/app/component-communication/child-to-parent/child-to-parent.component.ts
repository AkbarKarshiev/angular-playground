import { Component, OnInit, ViewChild } from '@angular/core';
import { C2pChildComponentComponent } from "./c2p-child-component/c2p-child-component.component";

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.scss']
})
export class ChildToParentComponent implements OnInit {
  @ViewChild(C2pChildComponentComponent) child: C2pChildComponentComponent;

  clickCounter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  counterChangedHandler(count: number) {
    this.clickCounter = count;
  }

  increment() {
    this.child.increment()
  }

  decrement() {
    this.child.decrement();
  }

}
