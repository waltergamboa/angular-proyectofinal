import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Curso } from 'src/app/models/cursos.model';
import { CursosService } from '../../services/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-agregar',
  templateUrl: './curso-agregar.component.html',
  styleUrls: ['./curso-agregar.component.css'],
})
export class CursoAgregarComponent {
  formulario!: FormGroup;
  constructor(private cursosService: CursosService, private router: Router) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('',  [Validators.required]),
      comision: new FormControl('',  [Validators.required]),
      fechaFin: new FormControl('',  [Validators.required]),
      fechaInicio: new FormControl('',  [Validators.required]),
      inscripcionAbierta: new FormControl(),
    });
  }

  agregarCurso(): void {
    let curso: Curso = new Curso(
      this.formulario.value.nombre,
      this.formulario.value.comision,
      this.formulario.value.inscripcionAbierta,
      this.formulario.value.fechaInicio,
      this.formulario.value.fechaFin,
    );

    this.cursosService.agregarCurso(curso);
    this.router.navigate(['cursos/listar']);
  }
}
