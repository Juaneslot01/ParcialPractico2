import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pacientes } from './pacientes';
import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class PacientesService {
    private apiUrl = environment.baseUrl + 'pacientes.json';
    constructor(private http: HttpClient) { }

    getPacientes(): Observable<Pacientes[]> {
        return this.http.get<Pacientes[]>(this.apiUrl);
      }

}
