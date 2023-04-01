import * as AuthActions from './auth.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { concatMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {


  cargarAuths$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AuthActions.cargarSesion),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) {}
}
