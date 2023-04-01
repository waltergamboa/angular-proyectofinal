import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { UsuariosEffects } from './usuario-state.effects';
import { provideMockActions } from '@ngrx/effects/testing';

describe('usuarioEffects', () => {
  let actions$: Observable<any>;
  let effects: UsuariosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsuariosEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UsuariosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
