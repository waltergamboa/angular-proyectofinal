import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InscripcionesListaComponent } from './inscripciones-lista.component';
import { MatTableModule } from '@angular/material/table';

describe('InscripcionesListaComponent', () => {
  let component: InscripcionesListaComponent;
  let fixture: ComponentFixture<InscripcionesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesListaComponent ],
      imports: [ HttpClientTestingModule, MatTableModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
