import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private loginService: LoginService,
    private router: Router){

  }
  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
      esAdmin: new FormControl()
    }
    )
  }

  login(){
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contraseña,
      esAdmin: this.formulario.value.esAdmin
    }

    this.loginService.login(usuario);
    this.router.navigate(['inicio']);
  }
}
