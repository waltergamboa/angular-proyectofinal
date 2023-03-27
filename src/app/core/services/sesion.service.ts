import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion.model';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesion$!: BehaviorSubject<Sesion>;
  
  constructor() {
    let sesion: Sesion = {
      sesionActiva: false
    };

    this.sesion$ = new BehaviorSubject<Sesion>(sesion);
   }

   crearSesion(sesion: Sesion){
    this.sesion$.next(sesion);
   }

   obtenerSesion(): Observable<Sesion>{
    return this.sesion$.asObservable();
   }

   logout(sesion: Sesion){
    this.sesion$.next(sesion);
    
   }
  }

