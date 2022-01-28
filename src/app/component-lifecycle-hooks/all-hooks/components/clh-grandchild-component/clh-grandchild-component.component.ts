import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

import { Customer } from "../../../customer";
import { log } from "util";

@Component({
  selector: 'app-clh-grandchild-component',
  templateUrl: './clh-grandchild-component.component.html',
  styleUrls: ['./clh-grandchild-component.component.scss']
})
export class ClhGrandchildComponentComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input() customer: Customer;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("GrandChildComponent: ngOnChanges");
  }

  ngOnInit(): void {
    console.log("GrandChildComponent: ngOnInit");
  }

  ngDoCheck():void {
    console.log("GrandChildComponent: ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("GrandChildComponent: ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("GrandChildComponent: ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("GrandChildComponent: ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("GrandChildComponent: ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("GrandChildComponent: ngOnDestroy");
  }
}
