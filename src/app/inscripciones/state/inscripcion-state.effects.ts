import { Actions, createEffect, ofType } from '@ngrx/effects';
import { agregarInscripcionState, cargarInscripcionState, editarInscripcionState, eliminarInscripcionState, inscripcionesCargadas } from './inscripcion-state.actions';
import { concatMap, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Inscripcion } from '../../models/inscripciones.model';
import { InscripcionesService } from '../services/inscripciones.service';
import { Router } from '@angular/router';

@Injectable()   
export class InscripcionesEffects{
    cargarIncripciones$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(cargarInscripcionState),
            concatMap(()=>{
                return this.inscripciones.obtenerInscripciones().pipe(
                    map((i: Inscripcion[])=>inscripcionesCargadas({inscripciones: i}))
                )
            })
        )
    });
    agregarInscripcion$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarInscripcionState),
            concatMap(({ inscripcion })=>{
                return this.inscripciones.agregarInscripcion(inscripcion).pipe(
                    map((inscripcion: Inscripcion) => {
                        this.router.navigate(['inscripciones/listar']);
                        return cargarInscripcionState();
                    })
                )
            })
        )
    })
    eliminarInscripcion$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(eliminarInscripcionState),
            concatMap(({ inscripcion })=>{
                return this.inscripciones.eliminarInscripcion(inscripcion).pipe(
                    map((inscripcion: Inscripcion) => {
                        return cargarInscripcionState();
                    })
                )
            })
        )
    });
    editarInscripcion$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(editarInscripcionState),
            concatMap(({ inscripcion })=>{
                return this.inscripciones.editarInscripcion(inscripcion).pipe(
                    map((inscripcion: Inscripcion) => {
                        this.router.navigate(['inscripciones/listar']);                        
                        return cargarInscripcionState();
                    })
                )
            })
        )
    });
    constructor(
        private inscripciones: InscripcionesService,
        private actions$: Actions,
        private router: Router
    ){}
}
