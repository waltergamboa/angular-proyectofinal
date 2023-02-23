import { CommonModule } from '@angular/common';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { MaterialModule } from '../modules/material.module';
import { NgModule } from '@angular/core';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursoAgregarComponent } from './components/curso-agregar/curso-agregar.component';

@NgModule({
  declarations: [
    CursosListaComponent,
    CursoEditarComponent,
    CursoAgregarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
