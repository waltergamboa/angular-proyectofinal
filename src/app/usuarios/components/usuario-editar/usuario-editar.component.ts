import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioState } from '../../state/usuario-state.reducer';
import { editarUsuarioState } from '../../state/usuario-state.actions';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css'],
})
export class UsuarioEditarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<UsuarioState>
  ) {}

  ngOnInit(): void {
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexTelefono: string = '^[0-9]*$';

    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.formulario = new FormGroup({
        id: new FormControl(parametros.get('id')),
        usuario: new FormControl(parametros.get('usuario'), [
          Validators.required,
        ]),
        contrasena: new FormControl(parametros.get('contrasena'), [
          Validators.required,
        ]),
        esAdmin: new FormControl(parametros.get('esAdmin') === 'true' ? true : false, [
          Validators.required,
        ]),
        nombre: new FormControl(parametros.get('nombre'), [
          Validators.required,
        ]),
        direccion: new FormControl(parametros.get('direccion'), [
          Validators.required,
        ]),
        telefono: new FormControl(parametros.get('telefono'), [
          Validators.required,
          Validators.pattern(regexTelefono),
        ]),
      });
    });
  }

  editarusuario(): void {
    let usuario: Usuario = {
      id: this.formulario.value.id,
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin,
      nombre: this.formulario.value.nombre,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
    };

    this.store.dispatch(editarUsuarioState({ usuario: usuario }));
  }
}
