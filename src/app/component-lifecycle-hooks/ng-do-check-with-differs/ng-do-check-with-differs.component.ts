import { Component, OnInit } from '@angular/core';

import { Customer } from "../customer";

@Component({
  selector: 'app-ng-do-check-with-differs',
  templateUrl: './ng-do-check-with-differs.component.html',
  styleUrls: ['./ng-do-check-with-differs.component.scss']
})
export class NgDoCheckWithDiffersComponent implements OnInit {
  message = '';
  customer: Customer = new Customer();
  name = '';
  code = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
  }
}
