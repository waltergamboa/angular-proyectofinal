import { createAction, props } from '@ngrx/store';

import { Inscripcion } from '../../models/inscripciones.model';

export const cargarInscripcionState = createAction(
  '[InscripcionState] Cargar Inscripcion'
);

export const inscripcionesCargadas = createAction(
  '[InscripcionState] Inscripciones cargadas',
  props<{ inscripciones: Inscripcion[] }>()
);

export const agregarInscripcionState = createAction(
  '[InscripcionState] Agregar inscripcion',
  props<{ inscripcion: Inscripcion }>()
);

export const editarInscripcionState = createAction(
  '[InscripcionState] Editar inscripcion',
  props<{ inscripcion: Inscripcion }>()
);

export const eliminarInscripcionState = createAction(
  '[InscripcionState] Eliminar inscripcion',
  props<{ inscripcion: Inscripcion }>()
);
