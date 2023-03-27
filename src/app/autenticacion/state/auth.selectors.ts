import * as fromAuth from './auth.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

// export const selectSesionActiva = createSelector(
//   selectAuthState,
//   (state) => state.sesion.sesionActiva
// );

// export const selectUsuarioActiva = createSelector(
//   selectAuthState,
//   (state) => state.sesion.usuarioActivo
// );

export const selectSesionState= createSelector(
  selectAuthState,
  (state) => state.sesion
);
