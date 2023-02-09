import { TestBed } from '@angular/core/testing';

import { CommonHTTPServiceService } from './common-http-service.service';

describe('CommonHTTPServiceService', () => {
  let service: CommonHTTPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonHTTPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
