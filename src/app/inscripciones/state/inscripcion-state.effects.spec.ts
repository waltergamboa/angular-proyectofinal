import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InscripcionesEffects } from './inscripcion-state.effects';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

describe('InscripcionStateEffects', () => {
  let actions$: Observable<any>;
  let effects: InscripcionesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        InscripcionesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InscripcionesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
