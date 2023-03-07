import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './core/components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {
    path: 'alumnos',
    loadChildren: () => import("./alumnos/alumnos.module").then((modulo) => modulo.AlumnosModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import("./cursos/cursos.module").then((modulo) => modulo.CursosModule),
    canLoad: [SesionGuard]
  },  
  {
    path: 'inscripciones',
    loadChildren: () => import("./inscripciones/inscripciones.module").then((modulo) => modulo.InscripcionesModule),
    canLoad: [SesionGuard]
  },    
   {
     path: 'auth',
     loadChildren: () => import("./autenticacion/autenticacion.module").then((modulo) => modulo.AutenticacionModule)
   },
   {path: '', redirectTo: 'inicio', pathMatch: 'full'},
   {path: '**', component: NoEncontradoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
