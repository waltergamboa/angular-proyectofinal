import { RouterModule, Routes } from '@angular/router';

import { CursoAgregarComponent } from './components/curso-agregar/curso-agregar.component';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'cursos', children: [
    {path: 'listar', component: CursosListaComponent},
    {path: 'agregar', component: CursoAgregarComponent},
    {path: 'editar', component: CursoEditarComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
