import { AlumnosModule } from './alumnos/alumnos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CursosModule } from './cursos/cursos.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { MainComponent } from './core/components/main/main.component';
import { MaterialModule } from './modules/material.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PipesModule } from './shared/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MainComponent,
    InicioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    PipesModule,
    AppRoutingModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
