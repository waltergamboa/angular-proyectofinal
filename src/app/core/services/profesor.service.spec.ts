import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfesorService } from './profesor.service';
import { TestBed } from '@angular/core/testing';

describe('ProfesorService', () => {
  let service: ProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
