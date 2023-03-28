import { RouterModule, Routes } from '@angular/router';

import { InscripcionAgregarComponent } from './components/inscripcion-agregar/inscripcion-agregar.component';
import { InscripcionEditarComponent } from './components/inscripcion-editar/inscripcion-editar.component';
import { InscripcionesInicioComponent } from './components/inscripciones-inicio/inscripciones-inicio.component';
import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';
import { NgModule } from '@angular/core';
import { SesionGuard } from '../core/guards/sesion.guard';

const routes: Routes = [
  {path: '', component: InscripcionesInicioComponent, canActivateChild: [SesionGuard], children: [
    {path: 'listar', component: InscripcionesListaComponent},
    {path: 'agregar', component: InscripcionAgregarComponent},
    {path: 'editar', component: InscripcionEditarComponent}

  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
