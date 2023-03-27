import { authFeatureKey, reducer } from './state/auth.reducer';

import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { AutenticacionRoutingModule } from './autenticacion-routing';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, reducer)
  ],
  providers: [
  ]
})
export class AutenticacionModule { }
