import { RouterModule, Routes } from '@angular/router';

import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'inscripciones', children: [
    {path: 'listar', component: InscripcionesListaComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
