import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarAlumnoState } from '../../state/alumno-state.actions';
import { AlumnoState } from '../../state/alumno-state.reducer';

@Component({
  selector: 'app-alumnos-inicio',
  templateUrl: './alumnos-inicio.component.html',
  styleUrls: ['./alumnos-inicio.component.css']
})
export class AlumnosInicioComponent {
  constructor(
    private store: Store<AlumnoState>
  ){}

  ngOnInit(): void {
    this.store.dispatch(cargarAlumnoState());
  }
}
