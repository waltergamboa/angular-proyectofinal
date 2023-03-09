import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoAgregarComponent } from './alumno-agregar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('AlumnoAgregarComponent', () => {
  let component: AlumnoAgregarComponent;
  let fixture: ComponentFixture<AlumnoAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoAgregarComponent ],
      imports: [ HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario valida los campos requeridos', ()=>{
    const formulario = component.formulario;
    const nombre = formulario.controls["nombre"];
    const apellido = formulario.controls["apellido"];
    const direccion = formulario.controls["direccion"];
    const correo = formulario.controls["correo"];
    const telefonoFijo = formulario.controls["telefonoFijo"];
    const telefonoCelular = formulario.controls["telefonoCelular"];

    nombre.setValue("");
    apellido.setValue("");
    direccion.setValue("");
    correo.setValue("");
    telefonoFijo.setValue("");
    telefonoCelular.setValue("");

    expect(formulario.valid).toBeFalse();
  });
  
});
