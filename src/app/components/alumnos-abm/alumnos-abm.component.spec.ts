import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosAbmComponent } from './alumnos-abm.component';

describe('AlumnosAbmComponent', () => {
  let component: AlumnosAbmComponent;
  let fixture: ComponentFixture<AlumnosAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosAbmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
