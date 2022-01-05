import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaruselTestComponent } from '../carusel-test/carusel-test.component';

import { SwiperTestComponent } from './swiper-test.component';

describe('SwiperTestComponent', () => {
  let component: SwiperTestComponent;
  let fixture: ComponentFixture<SwiperTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
