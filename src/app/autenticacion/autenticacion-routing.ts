import { RouterModule, Routes } from '@angular/router';

import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: AutenticacionInicioComponent, children: //auth
[{
  path: 'login', component: LoginComponent 
}]} // auth/login
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }