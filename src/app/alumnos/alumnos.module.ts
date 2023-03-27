import { alumnoStateFeatureKey, reducer } from './state/alumno-state.reducer';

import { AlumnoAgregarComponent } from './components/alumno-agregar/alumno-agregar.component';
import { AlumnoEditarComponent } from './components/alumno-editar/alumno-editar.component';
import { AlumnosEffects } from './state/alumno-state.effects';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './services/alumnos.service';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AlumnosInicioComponent } from './components/alumnos-inicio/alumnos-inicio.component';

@NgModule({
  declarations: [
    AlumnosListaComponent,
    AlumnoAgregarComponent,
    AlumnoEditarComponent,
    AlumnosInicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule,
    StoreModule.forFeature(alumnoStateFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosEffects])
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
