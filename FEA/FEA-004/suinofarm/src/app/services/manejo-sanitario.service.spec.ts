import { TestBed } from '@angular/core/testing';

import { ManejoSanitarioService } from './manejo-sanitario.service';

describe('ManejoSanitarioService', () => {
  let service: ManejoSanitarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoSanitarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
