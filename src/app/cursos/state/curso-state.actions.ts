import { createAction, props } from '@ngrx/store';

import { Curso } from '../../models/curso.model';

export const cargarCursoState = createAction(
  '[CursoState] Cargar Curso'
);

export const cursosCargados = createAction('[CursoState] Cursos cargados',
    props<{cursos: Curso[]}>()
);

export const agregarCursoState = createAction(
  '[CursoState] Agregar curso',
  props<{ curso: Curso }>()
);

export const editarCursoState = createAction(
  '[CursoState] Editar curso',
  props<{ curso: Curso }>()
);

export const eliminarCursoState = createAction(
  '[CursoState] Eliminar curso',
  props<{ curso: Curso }>()
);




