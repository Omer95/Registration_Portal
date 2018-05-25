import { TestBed, inject } from '@angular/core/testing';

import { ReadService } from './read.service';

describe('ReadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadService]
    });
  });

  it('should be created', inject([ReadService], (service: ReadService) => {
    expect(service).toBeTruthy();
  }));
});
