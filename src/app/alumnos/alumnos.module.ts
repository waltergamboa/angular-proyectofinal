import { AlumnoAgregarComponent } from './components/alumno-agregar/alumno-agregar.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
import { NgModule } from '@angular/core';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoEditarComponent } from './components/alumno-editar/alumno-editar.component';

@NgModule({
  declarations: [
    AlumnosListaComponent,
    AlumnoAgregarComponent,
    AlumnoEditarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
