import { Component, OnInit } from '@angular/core';

import { AuthState } from './autenticacion/state/auth.reducer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from './models/sesion.model';
import { Store } from '@ngrx/store';
import { selectSesionState } from './autenticacion/state/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = "angular-proyectofinal";
  sesion$!: Observable<Sesion>;

  constructor(private router: Router,
    private authStore: Store<AuthState>){
  }

  ngOnInit(): void {
    this.sesion$ = this.authStore.select(selectSesionState)
    this.router.navigate(['inicio'])
  }

  redirigirInicio(){
    this.router.navigate(['inicio'])
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false
    }

    //this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}
