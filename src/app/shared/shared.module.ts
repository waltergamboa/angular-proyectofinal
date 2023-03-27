import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { MaterialModule } from '../modules/material.module';
import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, PipesModule, DirectivesModule],
  exports: [ReactiveFormsModule, MaterialModule, PipesModule, DirectivesModule],
})
export class SharedModule {}
