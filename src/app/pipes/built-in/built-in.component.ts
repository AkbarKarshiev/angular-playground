import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DatePipe, KeyValue } from "@angular/common";

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.scss']
})
export class BuiltInComponent implements OnInit {

  toDate: Date = new Date();
  componentDate: string;
  msg: string = 'Welcome to Angular';
  num: number = 3434.65672;
  per: number = .72323;
  cur:number = 175;
  tempInC: number = 25;
  tempInF: number = 90;
  obj = {
    c: 123,
    b: 456,
    a: 789,
  };


  obsValue = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      console.log("Return value");
      observer.next("1000");
    }, 5000);
  })
  hounds: Observable<any> = this.getHoundList();

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.componentDate = this.datePipe.transform(new Date(), 'dd.MM.y')
  }

  orderByValueDesc(a: KeyValue<string, number>, b: KeyValue<string, number>): number {
    return a.value > b.value ? 1 : (a.value > b.value) ? 0 : -1
  }

  getHoundList(): Observable<any> {
    return new Observable<any>((observer) => {
      setTimeout(() => {
        observer.next(
          { "message": ["afghan","basset","blood","english","ibizan","plott","walker"],"status":"success"}
        )
      }, 3000)
    });
  }
}
