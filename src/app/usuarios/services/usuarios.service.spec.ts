import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { usuariosService } from './usuarios.service';
import { TestBed } from '@angular/core/testing';

describe('usuariosService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(usuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
