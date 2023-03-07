import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionAgregarComponent } from './inscripcion-agregar.component';

describe('InscripcionAgregarComponent', () => {
  let component: InscripcionAgregarComponent;
  let fixture: ComponentFixture<InscripcionAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
