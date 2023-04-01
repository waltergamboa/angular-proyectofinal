import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InscripcionEditarComponent } from './inscripcion-editar.component';
import { MaterialModule } from '../../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('InscripcionEditarComponent', () => {
  let component: InscripcionEditarComponent;
  let fixture: ComponentFixture<InscripcionEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionEditarComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule, StoreModule.forRoot({}) ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
