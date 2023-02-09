import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { Alumno } from '../../models/alumnos.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent {
  alumnosListaVisible: boolean = true;
  alumnosAbmVisible: boolean = false;
  alumno?: Alumno;

  @Input() listaAlumnos?: Alumno[];
  @Output() byAlumnos = new EventEmitter<Alumno[]>();
  @Output() byAlumno = new EventEmitter<Alumno>();

  constructor() {}

  btnSalir(data: boolean) {
    this.alumnosAbmVisible = data;
    this.alumnosListaVisible = !data;
  }

  btnAgregar(value: boolean) {
    this.alumnosAbmVisible = value;
    this.alumnosListaVisible = !value;
    let alumno: Alumno = new Alumno('', '', '', '', '', '');

    this.alumno = alumno;
  }

  btnEditar(data: Alumno) {
    this.alumnosListaVisible = false;
    this.alumnosAbmVisible = true;
    this.alumno = data;
    this.byAlumno.emit(data);
  }

  btnEliminar(sender: Alumno) {
    let item = this.listaAlumnos?.find(
      (item) =>
        item.nombre === sender.nombre && item.apellido === sender.apellido
    );

    const filtrado = this.listaAlumnos?.filter(
      (item1) => item1.nombre !== item?.nombre
    );

    this.listaAlumnos = filtrado;
    this.byAlumnos.emit(filtrado);
  }

  alumnoAgregar(sender: Alumno) {
    let item = this.listaAlumnos?.find(
      (item) =>
        item.nombre === sender.nombre && item.apellido === sender.apellido
    );

    const filtrado = this.listaAlumnos?.filter(
      (item1) => item1.nombre !== item?.nombre
    );

    this.listaAlumnos = filtrado;
    this.listaAlumnos?.push(sender);
    this.byAlumnos.emit(this.listaAlumnos);
  }
}
