import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { UsuarioEditarComponent } from './usuario-editar.component';

describe('usuarioEditarComponent', () => {
  let component: UsuarioEditarComponent;
  let fixture: ComponentFixture<UsuarioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEditarComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule, StoreModule.forRoot({}) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
