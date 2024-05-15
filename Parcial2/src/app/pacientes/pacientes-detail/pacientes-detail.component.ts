import { Component, Input, OnInit } from '@angular/core';
import { Pacientes } from '../pacientes';

@Component({
  selector: 'app-pacientes-detail',
  templateUrl: './pacientes-detail.component.html',
  styleUrls: ['./pacientes-detail.component.css']
})
export class PacientesDetailComponent implements OnInit {

  @Input() pacientesDetail!: Pacientes;

  constructor() { }

  ngOnInit() {
  }

}
