import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Alumno } from 'src/app/models/alumno.model';
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
        id: new FormControl(parametros.get('id')),
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido'), [Validators.required]),
        direccion: new FormControl(parametros.get('direccion'), [Validators.required]),
        correo: new FormControl(parametros.get('correo'), [Validators.required, Validators.email,
        Validators.pattern(regexCorreo)]),
        telefonoFijo: new FormControl(parametros.get('telefonoFijo'), [Validators.required]),
        telefonoCelular: new FormControl(parametros.get('telefonoCelular'), [Validators.required]),
      })
    })
  }

  editarAlumno(): void {
    let alumno: Alumno = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      direccion: this.formulario.value.direccion,
      correo: this.formulario.value.correo,
      telefonoFijo: this.formulario.value.telefonoFijo,
      telefonoCelular: this.formulario.value.telefonoCelular
    }

    this.alumnosService.editarAlumno(alumno).subscribe((alumno: Alumno) => {
      alert(`${alumno.nombre} editadoa satisfactoriamente`);
      this.router.navigate(['alumnos/listar']);
    });
  }
}
