import { TestBed } from '@angular/core/testing';

import { CustomAuthGuard } from './auth-guard.guard';

describe('AuthGuardGuard', () => {
  let guard: CustomAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
