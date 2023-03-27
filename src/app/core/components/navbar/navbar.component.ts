import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { AuthState } from '../../../autenticacion/state/auth.reducer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from '../../services/sesion.service';
import { Store } from '@ngrx/store';
import { cerrarSesion } from '../../../autenticacion/state/auth.actions';
import { selectSesionState } from '../../../autenticacion/state/auth.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sesion$!: Observable<Sesion>;

  @Output() byComponenteVisible = new EventEmitter<string>();
  
  constructor(private router: Router, private authStore: Store<AuthState>, private sesion: SesionService){
  }


  ngOnInit(): void {
    this.sesion$ = this.authStore.select(selectSesionState)
  }  

  
  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false
    }
   
    //this.sesion.logout(sesionLogout);
    this.authStore.dispatch(cerrarSesion());
   // this.router.navigate(['auth/login']);
   this.router.navigate(['inicio']);
   
  }
  
}
