import { TestBed } from '@angular/core/testing';

import { CheckinserviceService } from './checkinservice.service';

describe('CheckinserviceService', () => {
  let service: CheckinserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
