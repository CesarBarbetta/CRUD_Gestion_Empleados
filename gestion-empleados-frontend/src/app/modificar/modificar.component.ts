import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService,Empleado } from '../empleados/empleados.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit{

  id:string="";
  empleadoActual: Empleado={id:'', name: ' ',designation:' ', salary:0 }
  constructor(
    private empleadoService: EmpleadosService,
    private activateRouter: ActivatedRoute,
    private router:Router){}

    ngOnInit(): void {
        this.id = this.activateRouter.snapshot.params["id"];
        this.empleadoService.getUnEmpleado(this.id).subscribe(
        resultado => this.empleadoActual=resultado
        );

    }

    guardarEmpleado()
    {
      this.empleadoService.editEmpleado(this.id, this.empleadoActual).subscribe(
        resultado => this.router.navigate(['/inicio'])

      );
    }

}
