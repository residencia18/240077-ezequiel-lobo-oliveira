import { TestBed } from '@angular/core/testing';

import { SuinoService } from './suino.service'; // Assuming 'SuinoService' is the correct exported member from 'suino.service'

describe('BackendService', () => {
  let service: SuinoService; // Update the type here as well

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuinoService); // Update the service injection here as well
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
