import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PacientesDetailComponent } from './pacientes-detail/pacientes-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PacientesListComponent, PacientesDetailComponent],
  exports: [PacientesListComponent]
})
export class PacientesModule { }
