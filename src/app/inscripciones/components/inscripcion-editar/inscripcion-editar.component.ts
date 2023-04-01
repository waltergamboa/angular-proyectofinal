import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { Alumno } from 'src/app/models/alumno.model';
import { Curso } from 'src/app/models/curso.model';
import { Inscripcion } from '../../../models/inscripciones.model';
import { InscripcionState } from '../../state/inscripcion-state.reducer';
import { Store } from '@ngrx/store';
import { editarInscripcionState } from '../../state/inscripcion-state.actions';
import { selectAlumnosCargados } from '../../../alumnos/state/alumno-state.selectors';
import { selectCursosCargados } from 'src/app/cursos/state/curso-state.selectors';

@Component({
  selector: 'app-inscripcion-editar',
  templateUrl: './inscripcion-editar.component.html',
  styleUrls: ['./inscripcion-editar.component.css'],
})
export class InscripcionEditarComponent implements OnInit, OnDestroy {
  formulario!: FormGroup;
  cursos$!: Observable<Curso[]>;
  alumnos$!: Observable<Alumno[]>;
  cursoSelected!: string;
  alumnoSelected!: string;
  suscripcionCurso!: Subscription;
  suscripcionAlumno!: Subscription;
  curso!: Curso;
  alumno!: Alumno;
  usuario!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<InscripcionState>
  ) {}
  ngOnDestroy(): void {
   // this.suscripcionCurso.unsubscribe();
   // this.suscripcionAlumno.unsubscribe();
  }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectCursosCargados);
    this.alumnos$ = this.store.select(selectAlumnosCargados);

    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.cursoSelected = parametros.get('cursoId')!;
      this.alumnoSelected = parametros.get('alumnoId')!;

      this.formulario = new FormGroup({
        id: new FormControl(parametros.get('id')),
        curso: new FormControl({}, [Validators.required]),
        alumno: new FormControl({}, [Validators.required]),
      });
    });

    this.formulario.get('curso')!.setValue(this.cursoSelected);
    this.formulario.get('alumno')!.setValue(this.alumnoSelected);
  }

  editarInscripcion(): void {
    this.suscripcionCurso = this.store
      .select(selectCursosCargados)
      .subscribe((data: Curso[]) =>
        data.find((curso: Curso) => {
          if (curso.id === this.formulario.value.curso) {
            this.curso = curso;
          }
        })
      );

    this.suscripcionAlumno = this.store
      .select(selectAlumnosCargados)
      .subscribe((data: Alumno[]) =>
        data.find((alumno: Alumno) => {
          if (alumno.id === this.formulario.value.alumno) {
            this.alumno = alumno;
          }
        })
      );

    let inscripcion: Inscripcion = {
      id: this.formulario.value.id,
      cursoId: this.formulario.value.curso.id,
      curso: this.curso.nombre,
      alumnoId: this.formulario.value.alumno.id,
      alumno: `${this.alumno.apellido}, ${this.alumno.nombre}`,
      fecha: new Date(),
      usuario: this.usuario!,
    };

    this.store.dispatch(editarInscripcionState({ inscripcion: inscripcion }));
  }
}
