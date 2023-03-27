import { Observable, Subscription } from 'rxjs';
import { cargarInscripcionState, inscripcionesCargadas } from '../../state/inscripcion-state.actions';
import { selectCargandoInscripciones, selectInscripcionesCargadas } from '../../state/inscripcion-state.selectors';

import { AuthState } from '../../../autenticacion/state/auth.reducer';
import { Component } from '@angular/core';
import { Inscripcion } from '../../../models/inscripciones.model';
import { InscripcionState } from '../../state/inscripcion-state.reducer';
import { InscripcionesService } from '../../services/inscripciones.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sesion } from '../../../models/sesion.model';
import { SesionService } from '../../../core/services/sesion.service';
import { Store } from '@ngrx/store';
import { selectSesionState } from '../../../autenticacion/state/auth.selectors';
import swal from 'sweetalert2';

@Component({
  selector: 'app-inscripciones-lista',
  templateUrl: './inscripciones-lista.component.html',
  styleUrls: ['./inscripciones-lista.component.css']
})
export class InscripcionesListaComponent {
  sesion$!: Observable<Sesion>;
  suscripcion!: Subscription;
  cargando$!: Observable<Boolean>;
  dataSource!: MatTableDataSource<Inscripcion>;
  columnas: string[] = [
    'alumno',
    'curso',
    'usuario',
    'fecha',
    'acciones'
  ];

  constructor(private inscripcionesService: InscripcionesService,
    private router: Router, private sesion: SesionService,
    private authStore: Store<AuthState>,
    private store: Store<InscripcionState>,
    private snackBar: MatSnackBar) {}

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Inscripcion>();

    this.cargando$ = this.store.select(selectCargandoInscripciones);
    this.store.dispatch(cargarInscripcionState());

    this.inscripcionesService.obtenerInscripciones().subscribe((inscripciones: Inscripcion[])=>{
      this.store.dispatch(inscripcionesCargadas({ inscripciones: inscripciones}));
    });


    // this.suscripcion = this.inscripcionesService
    //   .obtenerInscripciones()
    //   .subscribe((inscripciones: Inscripcion[]) => {
    //     this.dataSource.data = inscripciones;
    //   });

    this.suscripcion = this.store.select(selectInscripcionesCargadas).subscribe((inscripciones: Inscripcion[])=>{
      this.dataSource.data = inscripciones;
    });

      this.sesion$ = this.authStore.select(selectSesionState); //this.sesion.obtenerSesion();  
      
      this.snackBar.open('Inscripciones Cargadas','', {
        duration: 2000
      });


  }

  redirigirAgregar() {
    this.router.navigate(['inscripciones/agregar']);
  }

  redirigirEditar(inscripcion: Inscripcion) {
    this.router.navigate(['inscripciones/editar', inscripcion]);
  }

  eliminarInscripcion(inscripcion: Inscripcion) {
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
          this.inscripcionesService.eliminarInscripcion(inscripcion).subscribe((inscripcion: Inscripcion)=>{
            this.inscripcionesService.obtenerInscripciones().subscribe((inscripciones: Inscripcion[]) => {
              this.dataSource.data = inscripciones;
            });
          })
          swal.fire('Eliminado!', 'Se borro el registro!', 'success');
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire('Cancelado', 'Se mantiene el registro!', 'error');
        }
      });
  }  
}
