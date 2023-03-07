import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { AutenticacionRoutingModule } from './autenticacion-routing';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class AutenticacionModule { }
