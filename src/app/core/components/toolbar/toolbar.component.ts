import { Component, Input, OnInit } from '@angular/core';

import { Alumno } from '../../../models/alumno.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() alumnosInscriptos?: string;
  sesion$!: Observable<Sesion>;

  constructor(private router: Router,
    private sesion: SesionService){
  }

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }  

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false
    }

    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}
