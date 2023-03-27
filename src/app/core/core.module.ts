import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    NoEncontradoComponent,
    FooterComponent,
    InicioComponent,
    MainComponent,
    NavbarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    SharedModule,
    HttpClientModule,
    NoEncontradoComponent,
    FooterComponent,
    InicioComponent,
    MainComponent,
    NavbarComponent,
    ToolbarComponent,
  ],
})
export class CoreModule {}
