import * as AuthActions from './auth.actions';

import { Action, createReducer, on } from '@ngrx/store';

import { Sesion } from '../../models/sesion.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  sesion: Sesion
}

export const initialState: AuthState = {
  sesion: {
    sesionActiva: false
  }
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.cargarSesion, (state, { sesion }) => {
    return { ...state, sesion: {
      sesionActiva: true,
      usuarioActivo: sesion.usuarioActivo }}
     }),
     on(AuthActions.cerrarSesion, (state) => {
      return { ...state, sesion: {
        sesionActiva: false,
        usuarioActivo: undefined }}
       }),     
);
