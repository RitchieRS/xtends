import { TestBed } from '@angular/core/testing';

import { ReferedService } from './refered.service';

describe('ReferedService', () => {
  let service: ReferedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
