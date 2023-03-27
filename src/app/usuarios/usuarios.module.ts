import { reducer, usuarioStateFeatureKey } from './state/usuario-state.reducer';

import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { UsuarioAgregarComponent } from './components/usuario-agregar/usuario-agregar.component';
import { UsuarioEditarComponent } from './components/usuario-editar/usuario-editar.component';
import { UsuariosEffects } from './state/usuario-state.effects';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosInicioComponent } from './components/usuarios-inicio/usuarios-inicio.component';

@NgModule({
  declarations: [
    UsuariosListaComponent,
    UsuarioAgregarComponent,
    UsuarioEditarComponent,
    UsuariosInicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuariosRoutingModule,
    StoreModule.forFeature(usuarioStateFeatureKey, reducer),
    EffectsModule.forFeature([UsuariosEffects])
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
