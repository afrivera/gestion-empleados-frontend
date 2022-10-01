import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // obtiene el listado de los empleados
  private base_url = "http://localhost:8080/api/v1/empleados";
  constructor(
    private http:HttpClient
  ) { }

  getAllEmpleado(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.base_url}`);
  }

  getEmpleadoById(id: number):Observable<Empleado>{
    return this.http.get<Empleado>(`${this.base_url}/${ id }`);
  }

  // este metodo sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado): Observable<Object>{
    return this.http.post(`${this.base_url}`, empleado);
  }

  actualizarEmpleado(id: number, empleado: Empleado):Observable<Empleado>{
    return this.http.put<Empleado>(`${this.base_url}/${id}`, empleado );
  }
}
