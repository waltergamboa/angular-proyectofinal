import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { UsuariosInicioComponent } from './usuarios-inicio.component';

describe('UsuariosInicioComponent', () => {
  let component: UsuariosInicioComponent;
  let fixture: ComponentFixture<UsuariosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosInicioComponent ],
      imports: [ StoreModule.forRoot({}), RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
