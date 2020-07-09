import { TestBed } from '@angular/core/testing';

import { CargarClientesService } from './cargar-clientes.service';

describe('CargarClientesService', () => {
  let service: CargarClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
