import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Alumno } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-alumnos-abm',
  templateUrl: './alumnos-abm.component.html',
  styleUrls: ['./alumnos-abm.component.css'],
})
export class AlumnosAbmComponent implements OnInit {
  formularioRegistro: FormGroup;
  esValido?: boolean;
  mensaje?: string;
  listaAlumnos?: Alumno[] = [];

  @Output() bySalir = new EventEmitter<boolean>();
  @Output() byAlumno = new EventEmitter<Alumno>();
  @Input() alumno?: Alumno;

  constructor() {
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexTelefono: string = '^[0-9]*$';
    let controles: any = {
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
    };

    this.formularioRegistro = new FormGroup(controles);
  }

  ngOnInit() {
    this.formularioRegistro.controls['nombre'].setValue(this.alumno?.nombre);
    this.formularioRegistro.controls['apellido'].setValue(
      this.alumno?.apellido
    );
    this.formularioRegistro.controls['direccion'].setValue(
      this.alumno?.direccion
    );
    this.formularioRegistro.controls['correo'].setValue(this.alumno?.correo);
    this.formularioRegistro.controls['telefonoFijo'].setValue(
      this.alumno?.telefonoFijo
    );
    this.formularioRegistro.controls['telefonoCelular'].setValue(
      this.alumno?.telefonoCelular
    );
  }

  registrar(event: Event) {
    const nombre: string = this.formularioRegistro.controls['nombre'].value;
    const apellido: string = this.formularioRegistro.controls['apellido'].value;
    const direccion: string =
      this.formularioRegistro.controls['direccion'].value;
    const correo: string = this.formularioRegistro.controls['correo'].value;
    const telefonoFijo: string =
      this.formularioRegistro.controls['telefonoFijo'].value;
    const telefonoCelular: string =
      this.formularioRegistro.controls['telefonoCelular'].value;

    let alumno: Alumno = new Alumno(
      nombre,
      apellido,
      direccion,
      correo,
      telefonoFijo,
      telefonoCelular
    );

    this.byAlumno.emit(alumno);
    this.formularioRegistro.reset();
  }

  salir() {
    this.bySalir.emit(false);
  }
}
