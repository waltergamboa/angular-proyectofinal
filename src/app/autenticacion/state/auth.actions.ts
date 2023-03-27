import { createAction, props } from '@ngrx/store';

import { Sesion } from '../../models/sesion.model';

export const cargarSesion = createAction(
  '[Auth] Sesion Cargada',
  props<{ sesion: Sesion }>()
);

export const cerrarSesion = createAction(
  '[Auth] Sesion Cerrada'
);


