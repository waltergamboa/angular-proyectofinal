import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  cargarUsuarioState,
  eliminarUsuarioState,
} from '../../state/usuario-state.actions';
import {
  selectCargandoUsuarios,
  selectusuariosCargados,
} from '../../state/usuario-state.selectors';

import { AuthState } from '../../../autenticacion/state/auth.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Store } from '@ngrx/store';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioState } from '../../state/usuario-state.reducer';
import { UsuariosService } from '../../services/usuarios.service';
import { selectSesionState } from '../../../autenticacion/state/auth.selectors';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css'],
})
export class UsuariosListaComponent implements OnInit, OnDestroy {
  sesion$!: Observable<Sesion>;
  suscripcion!: Subscription;
  cargando$!: Observable<Boolean>;
  dataSource!: MatTableDataSource<Usuario>;
  columnas: string[] = [
    'usuario',
    'contrasena',
    'esAdmin',
    'nombre',
    'direccion',
    'telefono',
    'acciones',
  ];

  constructor(
    private router: Router,
    private store: Store<UsuarioState>,
    private authStore: Store<AuthState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Usuario>();

    this.cargando$ = this.store.select(selectCargandoUsuarios);

    this.store.dispatch(cargarUsuarioState());

    this.suscripcion = this.store
      .select(selectusuariosCargados)
      .subscribe((usuarios: Usuario[]) => {
        this.dataSource.data = usuarios;
      });

    this.sesion$ = this.authStore.select(selectSesionState); //this.sesion.obtenerSesion();

    this.snackBar.open('usuarios Cargados', '', {
      duration: 2000,
    });
  }

  redirigirAgregar() {
    this.router.navigate(['usuarios/agregar']);
  }

  redirigirEditar(usuario: Usuario) {
    this.router.navigate(['usuarios/editar', usuario]);
  }

  eliminarusuario(usuario: Usuario) {
    swal
      .fire({
        title: 'Esta seguro?',
        text: 'de eliminar este registro!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      })
      .then((result) => {
        if (result.value) {
          this.store.dispatch(eliminarUsuarioState({ usuario }));
          swal.fire('Eliminado!', 'Se borro el registro!', 'success');
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire('Cancelado', 'Se mantiene el registro!', 'error');
        }
      });
  }
}
