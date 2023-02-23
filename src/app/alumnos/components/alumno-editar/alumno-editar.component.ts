import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Alumno } from 'src/app/models/alumnos.model';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumno-editar',
  templateUrl: './alumno-editar.component.html',
  styleUrls: ['./alumno-editar.component.css']
})
export class AlumnoEditarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService,
    private router: Router){}
    
  ngOnInit(): void {
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexTelefono: string = '^[0-9]*$';
    
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('_nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('_apellido'), [Validators.required]),
        direccion: new FormControl(parametros.get('_direccion'), [Validators.required]),
        correo: new FormControl(parametros.get('_correo'), [Validators.required, Validators.email,
          Validators.pattern(regexCorreo)]),
        telefonoFijo: new FormControl(parametros.get('_telefonoFijo'), [Validators.required]),
        telefonoCelular: new FormControl(parametros.get('_telefonoCelular'), [Validators.required]),
      })
    })
  }

  editarAlumno(): void {
    let alumno = new Alumno(
      this.formulario.value.nombre,
      this.formulario.value.apellido,
      this.formulario.value.direccion,
      this.formulario.value.correo,
      this.formulario.value.telefonoFijo,
      this.formulario.value.telefonoCelular
    )

    this.alumnosService.editarAlumno(alumno);
    this.router.navigate(['alumnos/listar']);    
  }
}
