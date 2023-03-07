import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursosService } from '../../services/cursos.service';
import { Observable } from 'rxjs';
import { Profesor } from '../../../models/profesor.model';
import { ProfesorService } from '../../../core/services/profesor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-agregar',
  templateUrl: './curso-agregar.component.html',
  styleUrls: ['./curso-agregar.component.css'],
})
export class CursoAgregarComponent {
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private profesorService: ProfesorService
  ) {}

  ngOnInit(): void {
    this.profesores$ = this.profesorService.obtenerProfesores();

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
      id: '1',
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.formulario.value.profesor,
    };
    console.log(curso);
    this.cursosService.agregarCurso(curso).subscribe((curso: Curso) => {
      this.router.navigate(['cursos/listar']);
    });
  }
}
