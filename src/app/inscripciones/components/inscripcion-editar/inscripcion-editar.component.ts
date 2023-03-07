import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Inscripcion } from '../../../models/inscripciones.model';
import { InscripcionesService } from '../../services/inscripciones.service';

@Component({
  selector: 'app-inscripcion-editar',
  templateUrl: './inscripcion-editar.component.html',
  styleUrls: ['./inscripcion-editar.component.css']
})
export class InscripcionEditarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private inscripcionesService: InscripcionesService,
    private router: Router){}
    
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        id: new FormControl(parametros.get('id')),
        nombre: new FormControl(parametros.get('nombre'), [Validators.required])
      })
    })
  }

  editarInscripcion(): void {
    let inscripcion: Inscripcion = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre
    }

    this.inscripcionesService.editarInscripcion(inscripcion).subscribe((inscripcion: Inscripcion) => {
      alert(`${inscripcion.nombre} editado satisfactoriamente`);
      this.router.navigate(['inscripciones/listar']);
    });
  }
}
