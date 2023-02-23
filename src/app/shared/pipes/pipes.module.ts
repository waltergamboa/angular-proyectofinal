import { ApellidoNombrePipe } from './apellido-nombre/apellido-nombre.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ApellidoNombrePipe
],
  imports: [
    CommonModule,
  ],
  exports: [
    ApellidoNombrePipe
  ]
})
export class PipesModule { }