import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerusuarios(): Observable<Usuario[]> {
    return this.http
      .get<Usuario[]>(`${env.apiURL}/usuarios`, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          encoding: 'UTF-8',
        }),
      })
      .pipe(catchError(this.capturarError));
  }

  agregarusuario(usuario: Usuario): Observable<Usuario> {
    return this.http
      .post<Usuario>(`${env.apiURL}/usuarios`, usuario, {
        headers: new HttpHeaders({
          encoding: 'UTF-8',
        }),
      })
      .pipe(catchError(this.capturarError));
  }

  editarusuario(usuario: Usuario): Observable<Usuario> {
    return this.http
      .put<Usuario>(`${env.apiURL}/usuarios/${usuario.id}`, usuario, {
        headers: new HttpHeaders({
          encoding: 'UTF-8',
        }),
      })
      .pipe(catchError(this.capturarError));
  }

  eliminarusuario(usuario: Usuario): Observable<Usuario> {
    return this.http
      .delete<Usuario>(`${env.apiURL}/usuarios/${usuario.id}`, {
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

    return throwError(() => new Error('Error en el procesamiento de usuarios'));
  }
}
