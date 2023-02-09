import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Alumno } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Input() listaAlumnos?: Alumno[];
  @Output() byAlumnos = new EventEmitter<Alumno[]>();
  @Input() componenteVisible!: string;

  constructor() {}

  alumnos(sender: Alumno[]) {
    this.byAlumnos.emit(sender);
  }
}
