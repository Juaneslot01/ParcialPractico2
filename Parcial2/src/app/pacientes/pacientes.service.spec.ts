/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PacientesService } from './pacientes.service';
import { HttpClientModule } from '@angular/common/http';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { AppComponent } from '../app.component';

describe('Service: Pacientes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PacientesService],
      declarations: [PacientesListComponent,AppComponent]
    });
  });

  it('should ...', inject([PacientesService], (service: PacientesService) => {
    expect(service).toBeTruthy();
  }));
});
