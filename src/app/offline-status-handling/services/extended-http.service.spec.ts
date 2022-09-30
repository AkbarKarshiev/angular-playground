import { TestBed } from '@angular/core/testing';

import { ExtendedHttpService } from './extended-http.service';

describe('ExtendedHttpService', () => {
  let service: ExtendedHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtendedHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
