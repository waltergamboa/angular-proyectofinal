import { Actions, createEffect, ofType } from '@ngrx/effects';
import { agregarUsuarioState, cargarUsuarioState, editarUsuarioState, eliminarUsuarioState, usuariosCargados } from './usuario-state.actions';
import { concatMap, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuariosService } from '../services/usuarios.service';

@Injectable()   
export class UsuariosEffects{
    cargarusuarios$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(cargarUsuarioState),
            concatMap(()=>{
                return this.usuarios.obtenerusuarios().pipe(
                    map((a: Usuario[])=>usuariosCargados({usuarios: a}))
                )
            })
        )
    });
    agregarusuario$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarUsuarioState),
            concatMap(({ usuario })=>{
                return this.usuarios.agregarusuario(usuario).pipe(
                    map((usuario: Usuario) => {
                        this.router.navigate(['usuarios/listar']);
                        return cargarUsuarioState();
                    })
                )
            })
        )
    })
    eliminarusuario$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(eliminarUsuarioState),
            concatMap(({ usuario })=>{
                return this.usuarios.eliminarusuario(usuario).pipe(
                    map((usuario: Usuario) => {
                        return cargarUsuarioState();
                    })
                )
            })
        )
    });
    editarusuario$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(editarUsuarioState),
            concatMap(({ usuario })=>{
                return this.usuarios.editarusuario(usuario).pipe(
                    map((usuario: Usuario) => {
                        return cargarUsuarioState();
                    })
                )
            })
        )
    });
    constructor(
        private usuarios: UsuariosService,
        private actions$: Actions,
        private router: Router
    ){}
}
