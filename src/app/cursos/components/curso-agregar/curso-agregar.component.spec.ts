import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursoAgregarComponent } from './curso-agregar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../shared/shared.module';

describe('CursoAgregarComponent', () => {
  let component: CursoAgregarComponent;
  let fixture: ComponentFixture<CursoAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoAgregarComponent ],
      imports: [ HttpClientTestingModule, SharedModule, BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
