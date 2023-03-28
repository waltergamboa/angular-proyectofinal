import { AlumnoState } from 'src/app/alumnos/state/alumno-state.reducer';
import { Component } from '@angular/core';
import { CursoState } from 'src/app/cursos/state/curso-state.reducer';
import { InscripcionState } from '../../state/inscripcion-state.reducer';
import { Store } from '@ngrx/store';
import { cargarAlumnoState } from 'src/app/alumnos/state/alumno-state.actions';
import { cargarCursoState } from 'src/app/cursos/state/curso-state.actions';
import { cargarInscripcionState } from '../../state/inscripcion-state.actions';

@Component({
  selector: 'app-inscripciones-inicio',
  templateUrl: './inscripciones-inicio.component.html',
  styleUrls: ['./inscripciones-inicio.component.css']
})
export class InscripcionesInicioComponent {
  constructor(
    private store: Store<InscripcionState>,
    private storeAlumnos: Store<AlumnoState>,
    private storeCursos: Store<CursoState>
  ){}

  ngOnInit(): void {
    this.store.dispatch(cargarInscripcionState());
    this.storeAlumnos.dispatch(cargarAlumnoState());
    this.storeCursos.dispatch(cargarCursoState());
  }
}
