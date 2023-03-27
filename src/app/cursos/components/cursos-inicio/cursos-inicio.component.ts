import { Component, OnInit } from '@angular/core';

import { CursoState } from '../../state/curso-state.reducer';
import { Store } from '@ngrx/store';
import { cargarCursoState } from '../../state/curso-state.actions';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent implements OnInit {
  constructor(
    private store: Store<CursoState>
  ){}

  ngOnInit(): void {
    this.store.dispatch(cargarCursoState());
  }
}
