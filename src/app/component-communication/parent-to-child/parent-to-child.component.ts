import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.scss']
})
export class ParentToChildComponent implements OnInit {
  count = 5;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

}
