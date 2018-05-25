import { TestBed, inject } from '@angular/core/testing';

import { DelegationService } from './delegation.service';

describe('DelegationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelegationService]
    });
  });

  it('should be created', inject([DelegationService], (service: DelegationService) => {
    expect(service).toBeTruthy();
  }));
});
