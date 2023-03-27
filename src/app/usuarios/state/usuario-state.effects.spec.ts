import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { usuariostateEffects } from './usuario-state.effects';

describe('usuariostateEffects', () => {
  let actions$: Observable<any>;
  let effects: usuariostateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        usuariostateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(usuariostateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
