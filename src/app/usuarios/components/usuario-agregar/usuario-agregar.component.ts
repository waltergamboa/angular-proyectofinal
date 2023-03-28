import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioState } from '../../state/usuario-state.reducer';
import { agregarUsuarioState } from '../../state/usuario-state.actions';

@Component({
  selector: 'app-usuario-agregar',
  templateUrl: './usuario-agregar.component.html',
  styleUrls: ['./usuario-agregar.component.css'],
})
export class UsuarioAgregarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private store: Store<UsuarioState>) {}

  ngOnInit(): void {
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexTelefono: string = '^[0-9]*$';

    this.formulario = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      esAdmin: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern(regexTelefono),
      ]),
    });
  }

  agregarusuario(): void {
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin,
      nombre: this.formulario.value.nombre,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
    };
    this.store.dispatch(agregarUsuarioState({ usuario: usuario }));
  }
}
