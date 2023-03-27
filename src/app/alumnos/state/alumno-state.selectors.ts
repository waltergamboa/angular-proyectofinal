import * as fromAlumnoState from './alumno-state.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAlumnoState =
  createFeatureSelector<fromAlumnoState.AlumnoState>(
    fromAlumnoState.alumnoStateFeatureKey
  );

export const selectCargandoAlumnos = createSelector(
  selectAlumnoState,
  (state: fromAlumnoState.AlumnoState) => state.cargando
);

export const selectAlumnosCargados = createSelector(
  selectAlumnoState,
  (state: fromAlumnoState.AlumnoState) => state.alumnos
);
