import { cursoStateFeatureKey, reducer } from './state/curso-state.reducer';

import { CommonModule } from '@angular/common';
import { CursoAgregarComponent } from './components/curso-agregar/curso-agregar.component';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursosEffects } from './state/curso-state.effects';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './services/cursos.service';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    CursosListaComponent,
    CursoEditarComponent,
    CursoAgregarComponent,
    CursosInicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule,
    StoreModule.forFeature(cursoStateFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects])
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
