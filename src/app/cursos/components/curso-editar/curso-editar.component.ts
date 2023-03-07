import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursosService } from '../../services/cursos.service';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesorService } from '../../../core/services/profesor.service';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent {
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(private activatedRoute: ActivatedRoute, private cursosService: CursosService, private router: Router, private profesorService: ProfesorService) {}

  ngOnInit(): void {
    this.profesores$ = this.profesorService.obtenerProfesores();
    
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        id: new FormControl(parametros.get('id')),
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        comision: new FormControl(parametros.get('comision'), [Validators.required]),
        fechaFin: new FormControl(new Date(parametros.get('fechaFin') || ''), [Validators.required]),
        fechaInicio: new FormControl(new Date(parametros.get('fechaInicio') || ''), [Validators.required]),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta')),
        profesor: new FormControl(parametros.get('profesor'), [Validators.required])
      });
    })
  }

  editarCurso(): void {
    let curso: Curso = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.formulario.value.profesor
    };


    this.cursosService.editarCurso(curso);
    this.router.navigate(['cursos/listar']);
  }
}
