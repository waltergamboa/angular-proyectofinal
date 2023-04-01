import { AlumnosEffects } from './alumno-state.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

describe('AlumnoStateEffects', () => {
  let actions$: Observable<any>;
  let effects: AlumnosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AlumnosEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AlumnosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
