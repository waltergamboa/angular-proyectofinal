import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosListaComponent } from './usuarios-lista.component';

describe('Pruebas unitarias de usuariosListaComponent', () => {
  let component: UsuariosListaComponent;
  let fixture: ComponentFixture<UsuariosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ UsuariosListaComponent ],
      imports: [ HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//should create
  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
