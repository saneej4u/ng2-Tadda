import { TestBed, inject } from '@angular/core/testing';

import { EnduserService } from './enduser.service';

describe('EnduserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnduserService]
    });
  });

  it('should be created', inject([EnduserService], (service: EnduserService) => {
    expect(service).toBeTruthy();
  }));
});
