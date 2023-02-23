import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Alumno } from '../../../models/alumnos.model';
import { AlumnosService } from '../../services/alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-agregar',
  templateUrl: './alumno-agregar.component.html',
  styleUrls: ['./alumno-agregar.component.css']
})
export class AlumnoAgregarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private alumnosService: AlumnosService,
    private router: Router){
  }
  ngOnInit(): void {
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexTelefono: string = '^[0-9]*$';

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern(regexCorreo)]),
      telefonoFijo: new FormControl('',[Validators.required]),
      telefonoCelular: new FormControl('',[Validators.required]),
    })
  }

  agregarAlumno(): void {
    let alumno = new Alumno(
      this.formulario.value.nombre,
      this.formulario.value.apellido,
      this.formulario.value.direccion,
      this.formulario.value.correo,
      this.formulario.value.telefonoFijo,
      this.formulario.value.telefonoCelular
    )

    this.alumnosService.agregarAlumno(alumno);
    this.router.navigate(['alumnos/listar']);
  }
}
