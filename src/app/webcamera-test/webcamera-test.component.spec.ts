import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcameraTestComponent } from './webcamera-test.component';

describe('WebcameraTestComponent', () => {
  let component: WebcameraTestComponent;
  let fixture: ComponentFixture<WebcameraTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcameraTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcameraTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
