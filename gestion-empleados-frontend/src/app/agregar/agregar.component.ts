import { Empleado, EmpleadosService } from './../empleados/empleados.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  empleadoNuevo: Empleado = { id: '', name: '', designation: '', salary: 0 }
  constructor(private empleadoService: EmpleadosService, private router: Router) { }

  ngOnInit(): void {

  }


  agregarEmpleado() {

    this.empleadoService.saveEmpleado(this.empleadoNuevo).subscribe(
      response => this.router.navigate(['/inicio']),
    );

  }
}
