import { TestBed } from '@angular/core/testing';

import { SessionCheckGuardGuard } from './session-check-guard.guard';

describe('SessionCheckGuardGuard', () => {
  let guard: SessionCheckGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SessionCheckGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
