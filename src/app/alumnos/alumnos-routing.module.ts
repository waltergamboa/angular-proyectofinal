import { RouterModule, Routes } from '@angular/router';

import { AlumnoAgregarComponent } from './components/alumno-agregar/alumno-agregar.component';
import { AlumnoEditarComponent } from './components/alumno-editar/alumno-editar.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'alumnos', children: [
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
