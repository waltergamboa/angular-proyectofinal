import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Inscripcion } from '../../../models/inscripciones.model';
import { InscripcionesService } from '../../services/inscripciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion-agregar',
  templateUrl: './inscripcion-agregar.component.html',
  styleUrls: ['./inscripcion-agregar.component.css'],
})
export class InscripcionAgregarComponent {
  formulario!: FormGroup;

  constructor(
    private inscripcionesService: InscripcionesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required])
    });
  }

  agregarInscripcion(): void {
    let inscripcion: Inscripcion = {
      nombre: this.formulario.value.nombre,
    };
    this.inscripcionesService
      .agregarInscripcion(inscripcion)
      .subscribe((inscripcion: Inscripcion) => {
        alert(`${inscripcion.nombre} agregado satisfactoriamente`);
        this.router.navigate(['inscripciones/listar']);
      });
  }
}
