import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Alumno } from '../../../models/alumno.model';
import { AlumnosService } from 'src/app/alumnos/services/alumnos.service';
import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursosService } from '../../../cursos/services/cursos.service';
import { Inscripcion } from '../../../models/inscripciones.model';
import { InscripcionState } from '../../state/inscripcion-state.reducer';
import { InscripcionesService } from '../../services/inscripciones.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { agregarInscripcionState } from '../../state/inscripcion-state.actions';

@Component({
  selector: 'app-inscripcion-agregar',
  templateUrl: './inscripcion-agregar.component.html',
  styleUrls: ['./inscripcion-agregar.component.css'],
})
export class InscripcionAgregarComponent {
  formulario!: FormGroup;
  cursos$!: Observable<Curso[]>;
  alumnos$!: Observable<Alumno[]>;

  constructor(
    private inscripcionesService: InscripcionesService,
    private cursosService: CursosService,
    private alumnosService: AlumnosService,
    private router: Router,
    private store: Store<InscripcionState>
  ) {}

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
    
    this.formulario = new FormGroup({
      curso: new FormControl({}, [Validators.required]),
      alumno: new FormControl({}, [Validators.required])
    });
  }

  agregarInscripcion(): void {
    let inscripcion: Inscripcion = {
      cursoId: this.formulario.value.curso.id,
      curso: this.formulario.value.curso.nombre,
      alumnoId: this.formulario.value.alumno.id,
      alumno: this.formulario.value.alumno.nombre,
      fecha: new Date(),
      usuario: "test" // falta sacar de sesion
     };

     this.store.dispatch(agregarInscripcionState({ inscripcion: inscripcion }));

    // this.inscripcionesService
    //   .agregarInscripcion(inscripcion)
    //   .subscribe((inscripcion: Inscripcion) => {
    //     alert(`${inscripcion.alumno} agregado satisfactoriamente`);
    //     this.router.navigate(['inscripciones/listar']);
    //   });
  }
}
