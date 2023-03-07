import { Component, OnInit } from '@angular/core';

import { Alumno } from './models/alumno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listaAlumnos: Alumno[] = [];
  componenteVisible!: string;

  ngOnInit(): void {
   // this.componenteVisible = 'inicio';
  }

  alumnos(sender: Alumno[]) {
    this.listaAlumnos = sender;
  }

  btnMenu(sender: string){
    this.componenteVisible = sender;
  }

}
