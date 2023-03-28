import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Alumno } from '../../../models/alumno.model';
import { AlumnoState } from '../../state/alumno-state.reducer';
import { Store } from '@ngrx/store';
import { agregarAlumnoState } from '../../state/alumno-state.actions';

@Component({
  selector: 'app-alumno-agregar',
  templateUrl: './alumno-agregar.component.html',
  styleUrls: ['./alumno-agregar.component.css'],
})
export class AlumnoAgregarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private store: Store<AlumnoState>) {}
  
  ngOnInit(): void {
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexTelefono: string = '^[0-9]*$';

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      correo: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(regexCorreo),
      ]),
      telefonoFijo: new FormControl('', [
        Validators.required,
        Validators.pattern(regexTelefono),
      ]),
      telefonoCelular: new FormControl('', [
        Validators.required,
        Validators.pattern(regexTelefono),
      ]),
    });
  }

  agregarAlumno(): void {
    let alumno: Alumno = {
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      direccion: this.formulario.value.direccion,
      correo: this.formulario.value.correo,
      telefonoFijo: this.formulario.value.telefonoFijo,
      telefonoCelular: this.formulario.value.telefonoCelular,
    };
    this.store.dispatch(agregarAlumnoState({ alumno: alumno }));
  }
}
