import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthState } from '../../state/auth.reducer';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Sesion } from '../../../models/sesion.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from '../../../models/usuario.model';
import { cargarSesion } from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  formulario!: FormGroup;
  suscripcion!: Subscription;

  constructor(private loginService: LoginService,
    private router: Router,
    private authStore: Store<AuthState>){

  }
  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
      esAdmin: new FormControl()
    }
    )
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();    
  }

  login(){
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin
    }

//    this.loginService.login(usuario);
  //  this.router.navigate(['inicio']);

    this.suscripcion = this.loginService.login(usuario).subscribe((sesion: Sesion) =>{
      this.authStore.dispatch(cargarSesion({ sesion: sesion}))
      this.router.navigate(['inicio']);
    } );
  }
}
