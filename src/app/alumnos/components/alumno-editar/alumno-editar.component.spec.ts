import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoEditarComponent } from './alumno-editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('AlumnoEditarComponent', () => {
  let component: AlumnoEditarComponent;
  let fixture: ComponentFixture<AlumnoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoEditarComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule, StoreModule.forRoot({}) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
