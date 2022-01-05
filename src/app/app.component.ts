import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'playground';

  ngOnInit() {
    this.someFunc();
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
