import {
  inscripcionStateFeatureKey,
  reducer,
} from './state/inscripcion-state.reducer';

import { AlumnosService } from '../alumnos/services/alumnos.service';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionAgregarComponent } from './components/inscripcion-agregar/inscripcion-agregar.component';
import { InscripcionEditarComponent } from './components/inscripcion-editar/inscripcion-editar.component';
import { InscripcionesEffects } from './state/inscripcion-state.effects';
import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { InscripcionesInicioComponent } from './components/inscripciones-inicio/inscripciones-inicio.component';

@NgModule({
  declarations: [
    InscripcionesListaComponent,
    InscripcionAgregarComponent,
    InscripcionEditarComponent,
    InscripcionesInicioComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(inscripcionStateFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects]),
  ],
  providers: [AlumnosService],
})
export class InscripcionesModule {}
