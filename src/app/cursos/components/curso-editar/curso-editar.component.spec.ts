import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursoEditarComponent } from './curso-editar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CursoEditarComponent', () => {
  let component: CursoEditarComponent;
  let fixture: ComponentFixture<CursoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoEditarComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
