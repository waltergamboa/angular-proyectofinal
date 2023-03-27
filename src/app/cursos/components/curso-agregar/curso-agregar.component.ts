import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursoState } from '../../state/curso-state.reducer';
import { Observable } from 'rxjs';
import { Profesor } from '../../../models/profesor.model';
import { ProfesorService } from '../../../core/services/profesor.service';
import { Store } from '@ngrx/store';
import { agregarCursoState } from '../../state/curso-state.actions';

@Component({
  selector: 'app-curso-agregar',
  templateUrl: './curso-agregar.component.html',
  styleUrls: ['./curso-agregar.component.css'],
})
export class CursoAgregarComponent {
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private profesoresService: ProfesorService,
    private store: Store<CursoState>
  ) {}

  ngOnInit(): void {
    this.profesores$ = this.profesoresService.obtenerProfesores();

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      profesor: new FormControl({}, [Validators.required]),
      inscripcionAbierta: new FormControl(false),
    });
  }

  agregarCurso(): void {
    let curso: Curso = {
      id: '',
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.formulario.value.profesor,
    };

    this.store.dispatch(agregarCursoState({ curso: curso }));
  }
}
