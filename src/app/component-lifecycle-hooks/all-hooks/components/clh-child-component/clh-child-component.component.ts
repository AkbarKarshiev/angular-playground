import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

import { Customer } from "../../../customer";

@Component({
  selector: 'app-clh-child-component',
  templateUrl: './clh-child-component.component.html',
  styleUrls: ['./clh-child-component.component.scss']
})
export class ClhChildComponentComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input() message: string;

  customer: Customer = new Customer();

  constructor() {
    console.log("ChildComponent: constructed");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ChildComponent: ngOnChanges");
  }

  ngOnInit(): void {
    console.log("ChildComponent: ngOnInit");
  }

  ngDoCheck():void {
    console.log("ChildComponent: ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ChildComponent: ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ChildComponent: ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ChildComponent: ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ChildComponent: ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ChildComponent: ngOnDestroy");
  }
}
