import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from '../../core/services/sesion.service';
import { Usuario } from '../../models/usuario.model';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private sesion: SesionService, private http: HttpClient) {}

  login(usuario: Usuario): Observable<Sesion> {
    return this.http.get<Usuario[]>(`${env.apiURL}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        let usuarioValidado = usuarios.find(
          (u: Usuario) =>
            u.usuario === usuario.usuario && u.contrasena === usuario.contrasena
        );
        if (usuarioValidado) {
          const sesion: Sesion = {
            sesionActiva: true,
            usuarioActivo: usuarioValidado,
          };
          return sesion;
        } else {
          const sesion: Sesion = {
            sesionActiva: false,
          };
          return sesion;
        }
      })
    );
  }
}
