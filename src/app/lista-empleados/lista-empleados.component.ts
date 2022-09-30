import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados!:Empleado[];

  constructor() { }

  ngOnInit(): void {
    this.empleados = [
      {
        id: 1,
        nombre: "Andres",
        apellido: "Rivera",
        email:"andresrfelip@hotmail.com"
      },
      {
        id: 2,
        nombre: "Juan David",
        apellido: "Rivera",
        email:"juandavid@hotmail.com"
      },
      {
        id: 3,
        nombre: "Cristian",
        apellido: "Rivera",
        email:"cristianrivera@hotmail.com"
      }
    ]
  }

}
