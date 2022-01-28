import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-all-hooks',
  templateUrl: './all-hooks.component.html',
  styleUrls: ['./all-hooks.component.scss']
})
export class AllHooksComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  message = "Hello";
  content = "Text in content";
  hideChild = false;

  constructor() {
    console.log("RootComponent: constructed");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("RootComponent: ngOnChanges");
  }

  ngOnInit(): void {
    console.log("RootComponent: ngOnInit");
  }

  ngDoCheck():void {
    console.log("RootComponent: ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("RootComponent: ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("RootComponent: ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("RootComponent: ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("RootComponent: ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("RootComponent: ngOnDestroy");
  }
}
