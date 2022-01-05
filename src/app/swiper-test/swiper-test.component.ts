import {Component, OnInit} from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swiper-test',
  templateUrl: './swiper-test.component.html',
  styleUrls: ['./swiper-test.component.scss']
})
export class SwiperTestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }
}
