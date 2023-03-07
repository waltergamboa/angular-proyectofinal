import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from '../../core/services/sesion.service';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private sesion: SesionService) { }

  login(usuario: Usuario){
    let sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: usuario
    }

    this.sesion.crearSesion(sesion);
  }
}
