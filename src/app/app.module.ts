import { NgModule, isDevMode } from '@angular/core';

import { AlumnosModule } from './alumnos/alumnos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { CursosModule } from './cursos/cursos.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AutenticacionModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
