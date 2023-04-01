import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Route, RouterModule } from '@angular/router';

import { CursosInicioComponent } from './cursos-inicio.component';
import { StoreModule } from '@ngrx/store';

describe('CursosInicioComponent', () => {
  let component: CursosInicioComponent;
  let fixture: ComponentFixture<CursosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosInicioComponent ],
      imports: [ StoreModule.forRoot({}), RouterModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
