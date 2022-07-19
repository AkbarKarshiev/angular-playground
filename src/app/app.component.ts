import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'playground';
  switchVal$ = new BehaviorSubject<'a' | 'b'>('a')
  ngOnInit() {
    this.someFunc();
  }

  changeView(): void {
    const currVal = this.switchVal$.getValue();
    if (currVal === 'a') {
      this.switchVal$.next('b');
    } else if (currVal === 'b') {
      this.switchVal$.next('a');
    }
  }

  someFunc() {
    var myArray = [
      {property: '123', value: 10},
      {property: '1234', value: 8},
      {property: '123', value: 7},
      {property: '1234', value: 9},
      {property: '122', value: 1},
      {property: '123', value: 3},
      {property: ' '}
    ];

    var obj: {[k: string]: any} = {};

    for(let i = 0; i < myArray.length; i++) {
      if (obj[myArray[i].property]) {
        obj[myArray[i].property].push(myArray[i]);
      } else {
        obj[myArray[i].property] = [myArray[i]];
      }
    }

    const resultArr: any[] = [];

    Object.keys(obj).map((key) => {
      if (obj[key].length) {
        obj[key].sort((firstEl: any, secondEl: any) => firstEl.value - secondEl.value);
        resultArr.push(obj[key][0]);
      }
    })
    // console.log(obj);
    // console.log(resultArr);
  }
}
