import { Component, OnDestroy, OnInit } from '@angular/core';

import { Curso } from '../../../models/cursos.model';
import { CursosService } from '../../services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
})
export class CursosListaComponent implements OnInit, OnDestroy {
  suscripcion!: Subscription;
  dataSource!: MatTableDataSource<Curso>;
  columnas: string[] = [
    'nombre',
    'comision',
    'inscripcionAbierta',
    'fechaInicio',
    'fechaFin',
    'acciones',
  ];

  constructor(private cursosService: CursosService, private router: Router) {}

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Curso>();
    this.suscripcion = this.cursosService
      .obtenerCursos()
      .subscribe((cursos: Curso[]) => {
        this.dataSource.data = cursos;
      });
  }

  redirigirAgregar() {
    this.router.navigate(['cursos/agregar']);
  }

  redirigirEditar(curso: Curso) {
    this.router.navigate(['cursos/editar', curso]);
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
          this.cursosService.eliminarCurso(curso);
          swal.fire('Eliminado!', 'Se borro el registro!', 'success');
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire('Cancelado', 'Se mantiene el registro!', 'error');
        }
      });
  }
}
