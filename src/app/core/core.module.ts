import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

@NgModule({
  declarations: [
    NoEncontradoComponent
  ],
  imports: [SharedModule, HttpClientModule],
  exports: [SharedModule, HttpClientModule],
})
export class CoreModule {}
