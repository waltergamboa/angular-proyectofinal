import { RouterModule, Routes } from '@angular/router';

import { CursoAgregarComponent } from './components/curso-agregar/curso-agregar.component';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { NgModule } from '@angular/core';
import { SesionGuard } from '../core/guards/sesion.guard';

const routes: Routes = [
  {path: '', component: CursosInicioComponent, canActivateChild: [SesionGuard], children: [
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
