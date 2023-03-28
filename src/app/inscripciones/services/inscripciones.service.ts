import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Inscripcion } from 'src/app/models/inscripciones.model';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  constructor(private http: HttpClient) {}

  obtenerInscripciones(): Observable<Inscripcion[]> {
    return this.http
      .get<Inscripcion[]>(`${env.apiURL}/inscripciones`, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          encoding: 'UTF-8',
        }),
      })
      .pipe(catchError(this.capturarError));
  }

  agregarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http
      .post<Inscripcion>(`${env.apiURL}/inscripciones`, inscripcion, {
        headers: new HttpHeaders({
          encoding: 'UTF-8',
        }),
      })
      .pipe(catchError(this.capturarError));
  }

  editarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http
      .put<Inscripcion>(
        `${env.apiURL}/inscripciones/${inscripcion.id}`,
        inscripcion,
        {
          headers: new HttpHeaders({
            encoding: 'UTF-8',
          }),
        }
      )
      .pipe(catchError(this.capturarError));
  }

  eliminarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http
      .delete<Inscripcion>(`${env.apiURL}/inscripciones/${inscripcion.id}`, {
        headers: new HttpHeaders({}),
      })
      .pipe(catchError(this.capturarError));
  }

  private capturarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    } else {
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(
      () => new Error('Error en el procesamiento de inscripciones')
    );
  }
}
