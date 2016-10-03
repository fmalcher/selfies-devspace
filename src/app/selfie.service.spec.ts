/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelfieService } from './selfie.service';

describe('Service: Selfie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelfieService]
    });
  });

  it('should ...', inject([SelfieService], (service: SelfieService) => {
    expect(service).toBeTruthy();
  }));
});
