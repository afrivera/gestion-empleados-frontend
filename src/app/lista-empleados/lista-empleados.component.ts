import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados!:Empleado[];

  constructor(
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.empleadoService.getAllEmpleado()
        .subscribe(e=> this.empleados = e);
  }

}
