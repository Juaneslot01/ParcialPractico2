import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';
import { Pacientes } from '../pacientes';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  selectedPacientes!: Pacientes;
  selected = false;


  onSelected(paciente: Pacientes): void {
    this.selected = true;
    this.selectedPacientes = paciente;
  }



  constructor(private pacientesService: PacientesService) { }
  pacientes: Array<Pacientes> = [];

  getPacientess() {
    this.pacientesService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  

  ngOnInit() {
  }

}
