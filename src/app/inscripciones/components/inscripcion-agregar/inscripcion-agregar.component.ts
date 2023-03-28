import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Alumno } from '../../../models/alumno.model';
import { AlumnoState } from '../../../alumnos/state/alumno-state.reducer';
import { AuthState } from '../../../autenticacion/state/auth.reducer';
import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursoState } from '../../../cursos/state/curso-state.reducer';
import { Inscripcion } from '../../../models/inscripciones.model';
import { InscripcionState } from '../../state/inscripcion-state.reducer';
import { Observable } from 'rxjs';
import { Sesion } from '../../../models/sesion.model';
import { Store } from '@ngrx/store';
import { agregarInscripcionState } from '../../state/inscripcion-state.actions';
import { selectAlumnosCargados } from '../../../alumnos/state/alumno-state.selectors';
import { selectCursosCargados } from '../../../cursos/state/curso-state.selectors';
import { selectSesionState } from '../../../autenticacion/state/auth.selectors';

@Component({
  selector: 'app-inscripcion-agregar',
  templateUrl: './inscripcion-agregar.component.html',
  styleUrls: ['./inscripcion-agregar.component.css'],
})
export class InscripcionAgregarComponent {
  formulario!: FormGroup;
  sesion$!: Observable<Sesion>;
  cursos$!: Observable<Curso[]>;
  alumnos$!: Observable<Alumno[]>;
  usuario?: string;

  constructor(
    private store: Store<InscripcionState>,
    private authStore: Store<AuthState>,
    private cursoStore: Store<CursoState>,
    private alumnoStore: Store<AlumnoState>
  ) {}

  ngOnInit(): void {
    this.cursos$ = this.cursoStore.select(selectCursosCargados);
    this.alumnos$ = this.alumnoStore.select(selectAlumnosCargados);
    this.sesion$ = this.authStore.select(selectSesionState);

    this.formulario = new FormGroup({
      curso: new FormControl({}, [Validators.required]),
      alumno: new FormControl({}, [Validators.required]),
    });
  }

  agregarInscripcion(): void {
    this.sesion$.subscribe(
      (sesion: Sesion) => (this.usuario = sesion.usuarioActivo?.nombre)
    );

    let inscripcion: Inscripcion = {
      cursoId: this.formulario.value.curso.id,
      curso: this.formulario.value.curso.nombre,
      alumnoId: this.formulario.value.alumno.id,
      alumno: this.formulario.value.alumno.nombre,
      fecha: new Date(),
      usuario: this.usuario!,
    };

    this.store.dispatch(agregarInscripcionState({ inscripcion: inscripcion }));
  }
}
