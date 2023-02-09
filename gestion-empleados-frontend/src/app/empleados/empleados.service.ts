import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  url = 'http://localhost:8080/api/empleados'

  constructor(private HttpClient: HttpClient) { }

  getEmpleados(): Observable<any> {
    return this.HttpClient.get(this.url);
  }

  getUnEmpleado(id: string): Observable<any> {
    return this.HttpClient.get(this.url + '/' + id);
  }

  saveEmpleado(empleado: Empleado): Observable<any> {
    return this.HttpClient.post(this.url, empleado)
  }

  editEmpleado(id: string, empleado: Empleado): Observable<any> {
    return this.HttpClient.put(this.url + '/' + id, empleado)
  }

  deleteEmpleado(id: string): Observable<any> {
    return this.HttpClient.delete(this.url + '/' + id)
  }

}

export interface Empleado {
  id: string;
  name: string;
  designation: string;
  salary: number;

}
