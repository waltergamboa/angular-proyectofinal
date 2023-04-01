import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesInicioComponent } from './inscripciones-inicio.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('InscripcionesInicioComponent', () => {
  let component: InscripcionesInicioComponent;
  let fixture: ComponentFixture<InscripcionesInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesInicioComponent ],
      imports: [ StoreModule.forRoot({}), RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
