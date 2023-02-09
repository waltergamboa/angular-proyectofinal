import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Alumno } from 'src/app/models/alumnos.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css'],
})
export class AlumnosListaComponent implements OnInit, OnChanges {
  @Input() listaAlumnos?: Alumno[]; 

  @Output() byAgregar = new EventEmitter<boolean>();
  @Output() byEditar = new EventEmitter<Alumno>();
  @Output() byEliminar = new EventEmitter<Alumno>();

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>();

  columnas: string[] = [
    'apellidonombre',
    'direccion',
    'correo',
    'telefonofijo',
    'telefonocelular',
    'acciones'
  ];

  constructor(){}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);
  }

  ngOnInit(){
    this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);
  }

  btnAgregar(value: boolean){
    this.byAgregar.emit(value);
  }

  btnEditar(value: Alumno){
    this.byEditar.emit(value);
  }

  btnEliminar(value: Alumno){
    this.byEliminar.emit(value);
  }
}
