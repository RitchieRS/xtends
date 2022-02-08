import { TestBed } from '@angular/core/testing';

import { CameraHelperService } from './camera-helper.service';

describe('CameraHelperService', () => {
  let service: CameraHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
