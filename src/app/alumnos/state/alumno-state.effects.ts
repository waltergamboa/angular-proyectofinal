import { Actions, createEffect, ofType } from '@ngrx/effects';
import { agregarAlumnoState, alumnosCargados, cargarAlumnoState, editarAlumnoState, eliminarAlumnoState } from './alumno-state.actions';
import { concatMap, map } from 'rxjs/operators';

import { Alumno } from '../../models/alumno.model';
import { AlumnosService } from '../services/alumnos.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()   
export class AlumnosEffects{
    cargarAlumnos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(cargarAlumnoState),
            concatMap(()=>{
                return this.alumnos.obtenerAlumnos().pipe(
                    map((a: Alumno[])=>alumnosCargados({alumnos: a}))
                )
            })
        )
    });
    agregarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarAlumnoState),
            concatMap(({ alumno })=>{
                return this.alumnos.agregarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        this.router.navigate(['alumnos/listar']);
                        return cargarAlumnoState();
                    })
                )
            })
        )
    })
    eliminarAlumno$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(eliminarAlumnoState),
            concatMap(({ alumno })=>{
                return this.alumnos.eliminarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        return cargarAlumnoState();
                    })
                )
            })
        )
    });
    editarAlumno$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(editarAlumnoState),
            concatMap(({ alumno })=>{
                return this.alumnos.editarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        return cargarAlumnoState();
                    })
                )
            })
        )
    });
    constructor(
        private alumnos: AlumnosService,
        private actions$: Actions,
        private router: Router
    ){}
}
