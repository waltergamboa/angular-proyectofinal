import * as usuariostateActions from './usuario-state.actions';

import { createReducer, on } from '@ngrx/store';

import { Usuario } from '../../models/usuario.model';

export const usuarioStateFeatureKey = 'usuarioState';

export interface UsuarioState {
  cargando: boolean;
  usuarios: Usuario[];
}

export const initialState: UsuarioState = {
  cargando: false,
  usuarios: [],
};

export const reducer = createReducer(
  initialState,
  on(usuariostateActions.cargarUsuarioState, (state) => {
    return { ...state, cargando: true };
  }),
  on(usuariostateActions.usuariosCargados, (state, { usuarios }) => {
    return { ...state, cargando: false, usuarios };
  }),
  on(usuariostateActions.agregarUsuarioState, (state, { usuario: usuario }) => {
    return state;
  }),
  on(usuariostateActions.editarUsuarioState, (state, { usuario: usuario }) => {
    return state;
  }),
  on(usuariostateActions.eliminarUsuarioState, (state, { usuario: usuario }) => {
    return state;
  })
);
