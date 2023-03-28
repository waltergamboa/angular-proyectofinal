import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursoState } from '../../state/curso-state.reducer';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesorService } from '../../../core/services/profesor.service';
import { Store } from '@ngrx/store';
import { editarCursoState } from '../../state/curso-state.actions';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css'],
})
export class CursoEditarComponent {
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;
  selected!: string;
  profesores: Profesor[] = [];
  profesor!: Profesor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private profesoresService: ProfesorService,
    private store: Store<CursoState>
  ) {}

  ngOnInit(): void {
    this.profesores$ = this.profesoresService.obtenerProfesores();

    this.profesoresService
      .obtenerProfesores()
      .subscribe((datos: Profesor[]) => (this.profesores = datos));

    this.activatedRoute.paramMap.subscribe((parametros) => {
      let curso = JSON.parse(parametros.getAll('curso')[0]);
      this.selected = curso.profesor.id;

      this.formulario = new FormGroup({
        id: new FormControl(curso.id),
        nombre: new FormControl(curso.nombre, [Validators.required]),
        comision: new FormControl(curso.comision, [Validators.required]),
        fechaFin: new FormControl(new Date(curso.fechaFin || ''), [
          Validators.required,
        ]),
        fechaInicio: new FormControl(new Date(curso.fechaInicio || ''), [
          Validators.required,
        ]),
        inscripcionAbierta: new FormControl(curso.inscripcionAbierta),
        profesor: new FormControl(curso.profesor, [Validators.required]),
      });
    });

    this.formulario.get('profesor')!.setValue(this.selected);
  }

  editarCurso(): void {
    this.profesor = this.profesores.find(
      (profesor) =>
        String(profesor.id) === String(this.formulario.value.profesor)
    )!;

    let curso: Curso = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.profesor,
    };

    this.store.dispatch(editarCursoState({ curso: curso }));
  }
}
