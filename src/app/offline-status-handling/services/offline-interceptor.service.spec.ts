import { TestBed } from '@angular/core/testing';

import { OfflineInterceptorService } from './offline-interceptor.service';

describe('OfflineInterceptorService', () => {
  let service: OfflineInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
