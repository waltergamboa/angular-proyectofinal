import { Component, OnDestroy, OnInit } from '@angular/core';

import { Alumno } from '../../../models/alumnos.model';
import { AlumnosService } from '../../services/alumnos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css'],
})
export class AlumnosListaComponent implements OnInit, OnDestroy {
  suscripcion!: Subscription;
  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = [
    'apellidonombre',
    'direccion',
    'correo',
    'telefonofijo',
    'telefonocelular',
    'acciones',
  ];

  constructor(private alumnosService: AlumnosService, private router: Router) {}

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumno>();
    this.suscripcion = this.alumnosService
      .obtenerAlumnos()
      .subscribe((alumnos: Alumno[]) => {
        this.dataSource.data = alumnos;
      });
  }

  redirigirAgregar() {
    this.router.navigate(['alumnos/agregar']);
  }

  redirigirEditar(alumno: Alumno) {
    this.router.navigate(['alumnos/editar', alumno]);
  }

  eliminarAlumno(alumno: Alumno) {
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
          this.alumnosService.eliminarAlumno(alumno);
          swal.fire('Eliminado!', 'Se borro el registro!', 'success');
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire('Cancelado', 'Se mantiene el registro!', 'error');
        }
      });
  }
}
