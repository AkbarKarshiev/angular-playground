import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c2p-child-component',
  templateUrl: './c2p-child-component.component.html',
  styleUrls: ['./c2p-child-component.component.scss']
})
export class C2pChildComponentComponent implements OnInit {
  @Input() count: number;
  @Output() countChanged = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }

}
