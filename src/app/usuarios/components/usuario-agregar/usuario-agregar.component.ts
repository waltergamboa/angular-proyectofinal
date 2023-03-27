import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-agregar',
  templateUrl: './usuario-agregar.component.html',
  styleUrls: ['./usuario-agregar.component.css']
})
export class UsuarioAgregarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private UsuariosService: UsuariosService,
    private router: Router){
  }
  ngOnInit(): void {
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexTelefono: string = '^[0-9]*$';

    this.formulario = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('',[Validators.required]),
      esAdmin: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
    })
  }

  agregarusuario(): void {
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin,
      nombre: this.formulario.value.nombre,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono
    }
    this.UsuariosService.agregarusuario(usuario).subscribe((usuario: Usuario) => {
      alert(`${usuario.usuario} agregado satisfactoriamente`);
      this.router.navigate(['usuarios/listar']);
    });
    //this.usuariosService.agregarusuario(usuario);
    //this.router.navigate(['usuarios/listar']);
  }
}
