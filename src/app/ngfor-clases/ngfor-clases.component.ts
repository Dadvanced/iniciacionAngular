import { Component, OnInit } from '@angular/core';
import { Empleado } from '../model/empleado';
import { listaEmpleados } from '../model/lista-empleado';

@Component({
  selector: 'ngfor-clases',
  templateUrl: './ngfor-clases.component.html',
  styleUrls: ['./ngfor-clases.component.css']
})
export class NgforClasesComponent implements OnInit {

  empleados: Empleado[];

  constructor() {
    this.empleados = listaEmpleados;
   }

  ngOnInit() {
  }

}
