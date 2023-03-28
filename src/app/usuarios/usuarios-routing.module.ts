import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SesionGuard } from '../core/guards/sesion.guard';
import { UsuarioAgregarComponent } from './components/usuario-agregar/usuario-agregar.component';
import { UsuarioEditarComponent } from './components/usuario-editar/usuario-editar.component';
import { UsuariosInicioComponent } from './components/usuarios-inicio/usuarios-inicio.component';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';

const routes: Routes = [
  {path: '', component: UsuariosInicioComponent, canActivateChild: [SesionGuard], children: [
    {path: 'listar', component: UsuariosListaComponent},
    {path: 'agregar', component: UsuarioAgregarComponent},
    {path: 'editar', component: UsuarioEditarComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
