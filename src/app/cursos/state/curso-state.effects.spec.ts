import { CursosEffects } from './curso-state.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

describe('CursoStateEffects', () => {
  let actions$: Observable<any>;
  let effects: CursosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CursosEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CursosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
