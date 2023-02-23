import { BehaviorSubject, Observable } from 'rxjs';

import { Alumno } from '../../models/alumnos.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [
      new Alumno('nombre1', 'apellido1', 'direccion1', 'correo@gmail.com', '123456789', '123456789'),
      new Alumno('nombre2', 'apellido2', 'direccion2', 'correo@gmail.com', '123456789', '123456789'),
      new Alumno('nombre3', 'apellido3', 'direccion3', 'correo@gmail.com', '123456789', '123456789'),
  ];

  private alumnos$: BehaviorSubject<Alumno[]>;

  constructor() {
    this.alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnos);
    this.alumnos$.next(this.alumnos);
   }

   obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
   }

   agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
    this.alumnos$.next(this.alumnos);
  }

  editarAlumno(alumno: Alumno): void {
    let indice: number = this.alumnos.findIndex((a: Alumno)=> a.correo === alumno.correo)

    if(indice > -1){
      this.alumnos[indice] = alumno;
      this.alumnos$.next(this.alumnos);
    }
  }
  
  eliminarAlumno(alumno: Alumno): void {
    let indice: number = this.alumnos.findIndex((a: Alumno)=> a.correo === alumno.correo)

    if(indice > -1){
      this.alumnos.splice(indice, 1)
      this.alumnos$.next(this.alumnos);
    }
  }

}
