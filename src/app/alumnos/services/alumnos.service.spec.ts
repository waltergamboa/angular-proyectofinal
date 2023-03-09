import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlumnosService } from './alumnos.service';
import { TestBed } from '@angular/core/testing';

describe('AlumnosService', () => {
  let service: AlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
