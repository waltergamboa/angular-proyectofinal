import { Component } from '@angular/core';
import { Inscripcion } from '../../../models/inscripciones.model';
import { InscripcionesService } from '../../services/inscripciones.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inscripciones-lista',
  templateUrl: './inscripciones-lista.component.html',
  styleUrls: ['./inscripciones-lista.component.css']
})
export class InscripcionesListaComponent {
  suscripcion!: Subscription;
  dataSource!: MatTableDataSource<Inscripcion>;
  columnas: string[] = [
    'nombre',
    'acciones'
  ];

  constructor(private inscripcionesService: InscripcionesService,
    private router: Router) {}

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
  }
}
