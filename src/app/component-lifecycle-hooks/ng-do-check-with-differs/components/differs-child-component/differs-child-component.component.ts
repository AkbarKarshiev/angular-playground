import { Component, DoCheck, Input, KeyValueDiffers, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from "../../../customer";

@Component({
  selector: 'app-differs-child-component',
  templateUrl: './differs-child-component.component.html',
  styleUrls: ['./differs-child-component.component.scss']
})
export class DiffersChildComponentComponent implements OnInit, DoCheck, OnChanges {
  @Input() message: string;
  @Input() customer: Customer;
  changelog: string[] = [];
  oldCustomer: Customer= new Customer();
  DoCheckCount = 0;
  differ: any;

  constructor(private differs: KeyValueDiffers) { }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.differ = this.differs.find(this.customer).create();
  }

  ngDoCheck() {
    console.log('ngDoCheck')
    this.DoCheckCount++;

    const customerChanges = this.differ.diff(this.customer)

    if (customerChanges) {
      console.log(customerChanges)
      customerChanges.forEachChangedItem(r => this.changelog.push('changed ' + r.key + ' ' + JSON.stringify(r.currentValue)))
      customerChanges.forEachAddedItem(r => this.changelog.push('changed ' + r.key + ' ' + JSON.stringify(r.currentValue)))
      customerChanges.forEachRemovedItem(r => this.changelog.push('changed ' + r.key + ' ' + JSON.stringify(r.currentValue)))
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(JSON.stringify(changes));

    for (const propName in changes) {
      const change = changes[propName];
      const to  = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `${propName}: changed from ${from} to ${to} `;
      this.changelog.push(changeLog);
    }
  }
}
