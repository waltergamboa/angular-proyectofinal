import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Alumno } from '../../../models/alumno.model';
import { AlumnosService } from '../../services/alumnos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from 'src/app/core/services/sesion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css'],
})
export class AlumnosListaComponent implements OnInit, OnDestroy {
  sesion$!: Observable<Sesion>;
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

  constructor(private alumnosService: AlumnosService, private router: Router, private sesion: SesionService) {}

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
      this.sesion$ = this.sesion.obtenerSesion();      
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
          this.alumnosService.eliminarAlumno(alumno).subscribe((alumno: Alumno)=>{
            this.alumnosService.obtenerAlumnos().subscribe((alumnos: Alumno[]) => {
              this.dataSource.data = alumnos;
            });
          })
          swal.fire('Eliminado!', 'Se borro el registro!', 'success');
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire('Cancelado', 'Se mantiene el registro!', 'error');
        }
      });
  }
}
