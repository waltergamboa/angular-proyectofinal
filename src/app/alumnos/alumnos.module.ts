import { AlumnoAgregarComponent } from './components/alumno-agregar/alumno-agregar.component';
import { AlumnoEditarComponent } from './components/alumno-editar/alumno-editar.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './services/alumnos.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AlumnosListaComponent,
    AlumnoAgregarComponent,
    AlumnoEditarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
