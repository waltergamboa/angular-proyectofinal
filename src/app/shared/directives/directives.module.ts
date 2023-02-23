import { CommonModule } from '@angular/common';
import { Letras20Directive } from './letras-20/letras-20.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    Letras20Directive
],
  imports: [
    CommonModule,
  ],
  exports: [
    Letras20Directive
  ]
})
export class DirectivesModule { }