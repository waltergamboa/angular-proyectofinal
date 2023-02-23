import { CommonModule } from '@angular/common';
import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { MaterialModule } from '../modules/material.module';
import { NgModule } from '@angular/core';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InscripcionesListaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule { }
