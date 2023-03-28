import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioState } from '../../state/usuario-state.reducer';
import { cargarUsuarioState } from '../../state/usuario-state.actions';

@Component({
  selector: 'app-usuarios-inicio',
  templateUrl: './usuarios-inicio.component.html',
  styleUrls: ['./usuarios-inicio.component.css']
})
export class UsuariosInicioComponent {
  constructor(
    private store: Store<UsuarioState>
  ){}

  ngOnInit(): void {
    this.store.dispatch(cargarUsuarioState());
  }
}
