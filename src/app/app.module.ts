import { AlumnosAbmComponent } from './components/alumnos-abm/alumnos-abm.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Letras20Directive } from './directives/letras-20.directive';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from './modules/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ApellidoNombrePipe } from './pipes/apellido-nombre.pipe';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MainComponent,
    AlumnosListaComponent,
    AlumnosAbmComponent,
    Letras20Directive,
    AlumnosComponent,
    ApellidoNombrePipe,
    InicioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
