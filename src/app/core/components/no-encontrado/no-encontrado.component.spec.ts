import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEncontradoComponent } from './no-encontrado.component';
import { SharedModule } from '../../../shared/shared.module';

describe('NoEncontradoComponent', () => {
  let component: NoEncontradoComponent;
  let fixture: ComponentFixture<NoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEncontradoComponent ],
      imports: [ SharedModule ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
