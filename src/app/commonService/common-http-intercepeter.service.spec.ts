import { TestBed } from '@angular/core/testing';

import { CommonHTTPIntercepeterService } from './common-http-intercepeter.service';

describe('CommonHTTPIntercepeterService', () => {
  let service: CommonHTTPIntercepeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonHTTPIntercepeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
