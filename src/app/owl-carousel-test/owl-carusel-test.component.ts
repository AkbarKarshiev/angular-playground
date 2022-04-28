import {Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-carusel-test',
  templateUrl: './owl-carusel-test.component.html',
  styleUrls: ['./owl-carusel-test.component.scss']
})
export class OwlCaruselTestComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    nav: true,
    animateIn: 'slideInUp',
    animateOut: 'slideOutUp',
    responsive: {
      0: {
        items: 2
      },
      // 400: {
      //   items: 2
      // },
      // 740: {
      //   items: 3
      // },
      // 940: {
      //   items: 4
      // }
    },
  }


  constructor() { }

  ngOnInit(): void {
  }
}
