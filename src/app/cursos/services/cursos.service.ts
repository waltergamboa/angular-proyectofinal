import { BehaviorSubject, Observable } from 'rxjs';

import { Curso } from '../../models/cursos.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos: Curso[] = [
    new Curso('nombre1', 4300, true, new Date(), new Date()),
    new Curso('nombre2', 4400, true, new Date(), new Date()),
    new Curso('nombre3', 4500, false, new Date(), new Date()),
  ];

  private cursos$: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos);
    this.cursos$.next(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  agregarCurso(curso: Curso): void {
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
  }

  editarCurso(curso: Curso): void {
    let indice: number = this.cursos.findIndex(
      (c: Curso) => c.comision === curso.comision
    );

    if (indice > -1) {
      this.cursos[indice] = curso;
      this.cursos$.next(this.cursos);
    }
  }

  eliminarCurso(curso: Curso): void {
    let indice: number = this.cursos.findIndex(
      (c: Curso) => c.comision === curso.comision
    );

    if (indice > -1) {
      this.cursos.splice(indice, 1);
      this.cursos$.next(this.cursos);
    }
  }
}
