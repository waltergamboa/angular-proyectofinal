import * as fromUsuarioState from './usuario-state.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUsuarioState =
  createFeatureSelector<fromUsuarioState.UsuarioState>(
    fromUsuarioState.usuarioStateFeatureKey
  );

export const selectCargandoUsuarios = createSelector(
  selectUsuarioState,
  (state: fromUsuarioState.UsuarioState) => state.cargando
);

export const selectusuariosCargados = createSelector(
  selectUsuarioState,
  (state: fromUsuarioState.UsuarioState) => state.usuarios
);
