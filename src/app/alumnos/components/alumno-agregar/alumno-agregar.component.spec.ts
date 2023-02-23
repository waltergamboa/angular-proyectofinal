import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoAgregarComponent } from './alumno-agregar.component';

describe('AlumnoAgregarComponent', () => {
  let component: AlumnoAgregarComponent;
  let fixture: ComponentFixture<AlumnoAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
