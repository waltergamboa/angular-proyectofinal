import { CommonModule } from '@angular/common';
import { CursoAgregarComponent } from './components/curso-agregar/curso-agregar.component';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './services/cursos.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CursosListaComponent,
    CursoEditarComponent,
    CursoAgregarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
