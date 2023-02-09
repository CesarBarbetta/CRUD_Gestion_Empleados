import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { InicioComponent } from './inicio/inicio.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'modificar/:id',component:ModificarComponent},
  {path:'agregar',component:AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
