import { AlumnosService } from '../alumnos/services/alumnos.service';
import { CommonModule } from '@angular/common';
import { InscripcionAgregarComponent } from './components/inscripcion-agregar/inscripcion-agregar.component';
import { InscripcionEditarComponent } from './components/inscripcion-editar/inscripcion-editar.component';
import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InscripcionesListaComponent,
    InscripcionAgregarComponent,
    InscripcionEditarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscripcionesRoutingModule,
  ],
  providers: [
    AlumnosService
  ]
})
export class InscripcionesModule { }
