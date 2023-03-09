import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListaComponent } from './alumnos-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('Pruebas unitarias de AlumnosListaComponent', () => {
  let component: AlumnosListaComponent;
  let fixture: ComponentFixture<AlumnosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ AlumnosListaComponent ],
      imports: [ HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//should create
  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
