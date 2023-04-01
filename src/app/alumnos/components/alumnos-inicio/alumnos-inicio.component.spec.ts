import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosInicioComponent } from './alumnos-inicio.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

describe('AlumnosInicioComponent', () => {
  let component: AlumnosInicioComponent;
  let fixture: ComponentFixture<AlumnosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosInicioComponent ],
      imports: [ StoreModule.forRoot({}), RouterModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
