import { EmpleadosService } from './../empleados/empleados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {

  lista: any = [];
  constructor(private empleadoService: EmpleadosService,) {

  }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  handleSucessfulResponse(response: any) {
    this.lista = response
  }

  listarEmpleados() {
    this.empleadoService.getEmpleados().subscribe(

      response => this.handleSucessfulResponse(response),
    );

  }

  eliminar(id: string) {
    this.empleadoService.deleteEmpleado(id).subscribe(

      response => this.ngOnInit()

    );
  }


}






