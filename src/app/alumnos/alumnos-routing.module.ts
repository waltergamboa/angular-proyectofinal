import { RouterModule, Routes } from '@angular/router';

import { AlumnoAgregarComponent } from './components/alumno-agregar/alumno-agregar.component';
import { AlumnoEditarComponent } from './components/alumno-editar/alumno-editar.component';
import { AlumnosInicioComponent } from './components/alumnos-inicio/alumnos-inicio.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { NgModule } from '@angular/core';
import { SesionGuard } from '../core/guards/sesion.guard';

const routes: Routes = [
  {path: '', component: AlumnosInicioComponent, canActivateChild: [SesionGuard], children: [
    {path: 'listar', component: AlumnosListaComponent},
    {path: 'agregar', component: AlumnoAgregarComponent},
    {path: 'editar', component: AlumnoEditarComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
