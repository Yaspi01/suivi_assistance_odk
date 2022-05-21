import { TestBed } from '@angular/core/testing';

import { ApprenantGuard } from './apprenant.guard';

describe('ApprenantGuard', () => {
  let guard: ApprenantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApprenantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
