import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoState } from 'src/app/alumnos/state/alumno-state.reducer';
import { AlumnosService } from '../../../alumnos/services/alumnos.service';
import { Curso } from 'src/app/models/curso.model';
import { CursoState } from 'src/app/cursos/state/curso-state.reducer';
import { CursosService } from '../../../cursos/services/cursos.service';
import { Inscripcion } from '../../../models/inscripciones.model';
import { InscripcionState } from '../../state/inscripcion-state.reducer';
import { InscripcionesService } from '../../services/inscripciones.service';
import { Store } from '@ngrx/store';
import { alumnosCargados } from 'src/app/alumnos/state/alumno-state.actions';
import { cursosCargados } from '../../../cursos/state/curso-state.actions';
import { selectAlumnosCargados } from '../../../alumnos/state/alumno-state.selectors';
import { selectCursosCargados } from 'src/app/cursos/state/curso-state.selectors';

@Component({
  selector: 'app-inscripcion-editar',
  templateUrl: './inscripcion-editar.component.html',
  styleUrls: ['./inscripcion-editar.component.css']
})
export class InscripcionEditarComponent implements OnInit, OnDestroy {
  formulario!: FormGroup;
  cursos$!: Observable<Curso[]>;
  alumnos$!: Observable<Alumno[]>;
  cursoSelected!: string;
  alumnoSelected!: string;
  suscripcionCurso!: Subscription;
  suscripcionAlumno!: Subscription;
  curso!: Curso;
  alumno!: Alumno;
  test!: Curso[];

  constructor(private activatedRoute: ActivatedRoute,
    private inscripcionesService: InscripcionesService,
    private router: Router,
    private cursosService: CursosService,
    private alumnosService: AlumnosService,
    private store: Store<InscripcionState>,
    private storeCurso: Store<CursoState>,
    private storeAlumno: Store<AlumnoState>
    ){}
  ngOnDestroy(): void {
    this.suscripcionCurso.unsubscribe();
    this.suscripcionAlumno.unsubscribe();
  }
    
  ngOnInit(): void {

    this.cursosService.obtenerCursos().subscribe((cursos: Curso[])=>{
      this.store.dispatch(cursosCargados({ cursos: cursos}));
    });

    this.alumnosService.obtenerAlumnos().subscribe((alumnos: Alumno[])=>{
      this.store.dispatch(alumnosCargados({ alumnos: alumnos}));
    });



    this.cursos$ = this.cursosService.obtenerCursos();
    this.alumnos$ = this.alumnosService.obtenerAlumnos();

    
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.cursoSelected = parametros.get('cursoId')!;
      this.alumnoSelected = parametros.get('alumnoId')!;      

      this.formulario = new FormGroup({
        id: new FormControl(parametros.get('id')),
        curso: new FormControl({}, [Validators.required]),
        alumno: new FormControl({}, [Validators.required])
      })
    })



    this.formulario.get('curso')!.setValue(this.cursoSelected);
    this.formulario.get('alumno')!.setValue(this.alumnoSelected);
  }

  editarInscripcion(): void {

    console.log(this.formulario.value.curso);
    console.log(this.formulario.value.alumno);

    //let test: Observable<Inscripcion[]> = this.store.select(inscripcionesCargadas);

    
    
    
    //this.suscripcion = this.store.select(selectInscripcionesCargadas).subscribe((data: Inscripcion[]) => 
    //  this.resultado = data
    //  );  
    
    this.suscripcionCurso = this.store.select(selectCursosCargados).subscribe((data: Curso[]) => 
      data.find((curso: Curso) => {
        if(curso.id === this.formulario.value.curso){
          this.curso = curso;
        }
      })
      );

    console.log(this.curso);

    this.suscripcionAlumno = this.store.select(selectAlumnosCargados).subscribe((data: Alumno[]) => 
    data.find((alumno: Alumno) => {
      if(alumno.id === this.formulario.value.alumno){
        this.alumno = alumno;
      }
    })
    );

  console.log(this.alumno);



    // let inscripcion: Inscripcion = {
    //   id: this.formulario.value.id,
    //   nombre: this.formulario.value.nombre
    // }

    // this.inscripcionesService.editarInscripcion(inscripcion).subscribe((inscripcion: Inscripcion) => {
    //   alert(`${inscripcion.nombre} editado satisfactoriamente`);
    //   this.router.navigate(['inscripciones/listar']);
    // });

    //this.store.dispatch(agregarCursoState({ inscripcion: inscripcion }));
  }
}
