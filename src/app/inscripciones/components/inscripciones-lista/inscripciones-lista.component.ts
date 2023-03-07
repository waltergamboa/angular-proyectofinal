import { Observable, Subscription } from 'rxjs';

import { Component } from '@angular/core';
import { Inscripcion } from '../../../models/inscripciones.model';
import { InscripcionesService } from '../../services/inscripciones.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sesion } from '../../../models/sesion.model';
import { SesionService } from '../../../core/services/sesion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-inscripciones-lista',
  templateUrl: './inscripciones-lista.component.html',
  styleUrls: ['./inscripciones-lista.component.css']
})
export class InscripcionesListaComponent {
  sesion$!: Observable<Sesion>;
  suscripcion!: Subscription;
  dataSource!: MatTableDataSource<Inscripcion>;
  columnas: string[] = [
    'nombre',
    'acciones'
  ];

  constructor(private inscripcionesService: InscripcionesService,
    private router: Router, private sesion: SesionService) {}

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Inscripcion>();
    this.suscripcion = this.inscripcionesService
      .obtenerInscripciones()
      .subscribe((inscripciones: Inscripcion[]) => {
        this.dataSource.data = inscripciones;
      });
      this.sesion$ = this.sesion.obtenerSesion();      
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
