import { createAction, props } from '@ngrx/store';

import { Alumno } from '../../models/alumno.model';

export const cargarAlumnoState = createAction('[AlumnoState] Cargar Alumno');

export const alumnosCargados = createAction(
  '[AlumnoState] Alumnos cargados',
  props<{ alumnos: Alumno[] }>()
);

export const agregarAlumnoState = createAction(
  '[AlumnoState] Agregar alumno',
  props<{ alumno: Alumno }>()
);

export const editarAlumnoState = createAction(
  '[AlumnoState] Editar alumno',
  props<{ alumno: Alumno }>()
);

export const eliminarAlumnoState = createAction(
  '[AlumnoState] Eliminar alumno',
  props<{ alumno: Alumno }>()
);
