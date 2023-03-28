import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  selectCargandoCursos,
  selectCursosCargados,
} from '../../state/curso-state.selectors';

import { AuthState } from '../../../autenticacion/state/auth.reducer';
import { Curso } from '../../../models/curso.model';
import { CursoState } from '../../state/curso-state.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion.model';
import { Store } from '@ngrx/store';
import { eliminarCursoState } from '../../state/curso-state.actions';
import { selectSesionState } from '../../../autenticacion/state/auth.selectors';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
})
export class CursosListaComponent implements OnInit, OnDestroy {
  sesion$!: Observable<Sesion>;
  suscripcion!: Subscription;
  cargando$!: Observable<Boolean>;
  dataSource!: MatTableDataSource<Curso>;
  columnas: string[] = [
    'nombre',
    'comision',
    'inscripcionAbierta',
    'fechaInicio',
    'fechaFin',
    'profesor',
    'acciones',
  ];

  constructor(
    private router: Router,
    private store: Store<CursoState>,
    private authStore: Store<AuthState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Curso>();

    this.cargando$ = this.store.select(selectCargandoCursos);
    this.suscripcion = this.store
      .select(selectCursosCargados)
      .subscribe((cursos: Curso[]) => {
        this.dataSource.data = cursos;
      });

    this.sesion$ = this.authStore.select(selectSesionState); //this.sesion.obtenerSesion();
    this.snackBar.open('Cursos Cargados', '', {
      duration: 2000,
    });
  }

  redirigirAgregar() {
    this.router.navigate(['cursos/agregar']);
  }

  redirigirEditar(curso: Curso) {
    this.router.navigate(['cursos/editar', { curso: JSON.stringify(curso) }]);
  }

  eliminarCurso(curso: Curso) {
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
          this.store.dispatch(eliminarCursoState({ curso }));

          swal.fire('Eliminado!', 'Se borro el registro!', 'success');
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire('Cancelado', 'Se mantiene el registro!', 'error');
        }
      });
  }
}
