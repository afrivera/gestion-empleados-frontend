import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
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
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(!this.router.url.includes('actualizar')){
      return;
    }

    this.activateRoute.params
      .pipe(
        switchMap(({id})=> this.empleadoService.getEmpleadoById(id))
      )
      .subscribe(empl => this.empleado = empl)
  }

  guardarEmpleado(){
    if(this.empleado.nombre.trim().length===0) return;

    if(this.empleado.id){
      // update
      this.empleadoService.actualizarEmpleado(this.empleado.id, this.empleado)
        .subscribe(()=> this.router.navigateByUrl('empleados') )
    }else {
      // add
      this.empleadoService.registrarEmpleado(this.empleado)
            .subscribe(dato => {
              this.router.navigateByUrl("/empleados");
            })
    }
    
  }

  onSubmit(){
    // console.log(this.empleado);
    this.guardarEmpleado();
  }

}
