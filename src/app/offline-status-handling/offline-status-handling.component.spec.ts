import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineStatusHandlingComponent } from './offline-status-handling.component';

describe('OfflineStatusHandlingComponent', () => {
  let component: OfflineStatusHandlingComponent;
  let fixture: ComponentFixture<OfflineStatusHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineStatusHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineStatusHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
