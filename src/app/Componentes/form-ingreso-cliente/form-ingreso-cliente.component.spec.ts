import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIngresoClienteComponent } from './form-ingreso-cliente.component';

describe('FormIngresoClienteComponent', () => {
  let component: FormIngresoClienteComponent;
  let fixture: ComponentFixture<FormIngresoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIngresoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIngresoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
