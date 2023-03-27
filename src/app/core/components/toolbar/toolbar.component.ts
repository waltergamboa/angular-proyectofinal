import { Component, Input, OnInit } from '@angular/core';

import { AuthState } from '../../../autenticacion/state/auth.reducer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from '../../services/sesion.service';
import { Store } from '@ngrx/store';
import { cerrarSesion } from '../../../autenticacion/state/auth.actions';
import { selectSesionState } from '../../../autenticacion/state/auth.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() alumnosInscriptos?: string;
  sesion$!: Observable<Sesion>;

  constructor(private authStore : Store<AuthState>){
  }

  ngOnInit(): void {
    this.sesion$ = this.authStore.select(selectSesionState)
  }  

 
}
