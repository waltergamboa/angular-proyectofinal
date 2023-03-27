import { RouterModule, Routes } from '@angular/router';

import { UsuarioAgregarComponent } from './components/usuario-agregar/usuario-agregar.component';
import { UsuarioEditarComponent } from './components/usuario-editar/usuario-editar.component';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', children: [
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
