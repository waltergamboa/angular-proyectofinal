import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { CursosListaComponent } from './cursos-lista.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CursosListaComponent', () => {
  let component: CursosListaComponent;
  let fixture: ComponentFixture<CursosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosListaComponent ],
      imports: [ HttpClientTestingModule, MatTableModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
