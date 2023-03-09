import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InscripcionesService } from './inscripciones.service';
import { TestBed } from '@angular/core/testing';

describe('InscripcionesService', () => {
  let service: InscripcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(InscripcionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
