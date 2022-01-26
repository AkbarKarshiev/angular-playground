import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-p2c-child-component',
  templateUrl: './p2c-child-component.component.html',
  // inputs: ['Count'], // input properties can be given here but separate .html file can not access it
  styleUrls: ['./p2c-child-component.component.scss']
})
export class P2cChildComponentComponent implements OnInit, OnChanges {
  // @Input('Count') count: number; // aliasing

  @Input('Count')  // setter and getter approach
  set count(count: number) {
    this._count = count;
    console.log('Setter: ', count);
  }
  get count() {
    return this._count;
  }

  private _count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let property in changes) {
      console.log('Previous:', changes[property].previousValue);
      console.log('Current:', changes[property].currentValue);
      console.log('firstChange:', changes[property].firstChange);
    }
  }
}
