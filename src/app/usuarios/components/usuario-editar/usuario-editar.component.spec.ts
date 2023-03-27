import { ComponentFixture, TestBed } from '@angular/core/testing';

import { usuarioEditarComponent } from './usuario-editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('usuarioEditarComponent', () => {
  let component: usuarioEditarComponent;
  let fixture: ComponentFixture<usuarioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ usuarioEditarComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(usuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
