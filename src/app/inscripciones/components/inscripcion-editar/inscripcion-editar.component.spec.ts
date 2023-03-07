import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionEditarComponent } from './inscripcion-editar.component';

describe('InscripcionEditarComponent', () => {
  let component: InscripcionEditarComponent;
  let fixture: ComponentFixture<InscripcionEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionEditarComponent ]
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
