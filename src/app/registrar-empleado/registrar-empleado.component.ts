import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.scss']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoService.registrarEmpleado(this.empleado)
          .subscribe(dato => {
            console.log(dato);
            this.router.navigateByUrl("/empleados");
          })
  }

  onSubmit(){
    // console.log(this.empleado);
    this.guardarEmpleado();
  }

}
