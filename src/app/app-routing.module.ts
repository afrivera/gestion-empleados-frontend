import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  { path:'empleados', component: ListaEmpleadosComponent},
  { path:'registrar-empleado', component: RegistrarEmpleadoComponent},
  { path:'actualizar-empleado/:id', component: RegistrarEmpleadoComponent},
  { path: '**', redirectTo: 'empleados'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
