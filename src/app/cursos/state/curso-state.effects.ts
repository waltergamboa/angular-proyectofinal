import { Actions, createEffect, ofType } from '@ngrx/effects';
import { agregarCursoState, cargarCursoState, cursosCargados, editarCursoState, eliminarCursoState } from './curso-state.actions';
import { concatMap, map } from 'rxjs/operators';

import { Curso } from '../../models/curso.model';
import { CursosService } from '../services/cursos.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()   
export class CursosEffects{
    cargarCursos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(cargarCursoState),
            concatMap(()=>{
                return this.cursos.obtenerCursos().pipe(
                    map((c: Curso[])=>cursosCargados({cursos: c}))
                )
            })
        )
    });
    agregarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarCursoState),
            concatMap(({ curso })=>{
                return this.cursos.agregarCurso(curso).pipe(
                    map((curso: Curso) => {
                        this.router.navigate(['cursos/listar']);
                        return cargarCursoState();
                    })
                )
            })
        )
    })
    eliminarCurso$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(eliminarCursoState),
            concatMap(({ curso })=>{
                return this.cursos.eliminarCurso(curso).pipe(
                    map((curso: Curso) => {
                        return cargarCursoState();
                    })
                )
            })
        )
    });
    editarCurso$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(editarCursoState),
            concatMap(({ curso })=>{
                return this.cursos.editarCurso(curso).pipe(
                    map((curso: Curso) => {
                        this.router.navigate(['cursos/listar']);
                        return cargarCursoState();
                    })
                )
            })
        )
    });
    constructor(
        private cursos: CursosService,
        private actions$: Actions,
        private router: Router
    ){}
}