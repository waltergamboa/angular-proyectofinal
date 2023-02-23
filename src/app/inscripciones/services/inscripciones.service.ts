import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Inscripcion } from 'src/app/models/inscripciones.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  private inscripciones: Inscripcion[] = [
    new Inscripcion('nombre1'),
    new Inscripcion('nombre2'),
    new Inscripcion('nombre3'),
];

private inscripciones$: BehaviorSubject<Inscripcion[]>;

constructor() {
  this.inscripciones$ = new BehaviorSubject<Inscripcion[]>(this.inscripciones);
  this.inscripciones$.next(this.inscripciones);
 }

 obtenerInscripciones(): Observable<Inscripcion[]> {
  return this.inscripciones$.asObservable();
 }
}
