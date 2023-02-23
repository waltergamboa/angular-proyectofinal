import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Curso } from 'src/app/models/cursos.model';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent {
  formulario!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private cursosService: CursosService, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('_nombre'), [Validators.required]),
        comision: new FormControl(parametros.get('_comision'), [Validators.required]),
        fechaFin: new FormControl(new Date(parametros.get('_fechaFin') || ''), [Validators.required]),
        fechaInicio: new FormControl(new Date(parametros.get('_fechaInicio') || ''), [Validators.required]),
        inscripcionAbierta: new FormControl(parametros.get('_inscripcionAbierta')),
      });
  
    })


  }

  editarCurso(): void {
    let curso: Curso = new Curso(
      this.formulario.value.nombre,
      this.formulario.value.comision,
      this.formulario.value.inscripcionAbierta,
      this.formulario.value.fechaInicio,
      this.formulario.value.fechaFin,
    );

    this.cursosService.editarCurso(curso);
    this.router.navigate(['cursos/listar']);
  }
}
