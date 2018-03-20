import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directiva-ngmodel',
  templateUrl: './directiva-ngmodel.component.html',
  styleUrls: ['./directiva-ngmodel.component.css']
})
export class DirectivaNgmodelComponent implements OnInit {

  numeros: number[];
  frutas: string[];

  numero: number;
  fruta: string;

  constructor() { }

  ngOnInit() {
    this.numeros = [1, 5, 8, 24, 32, 11, 55];
    this.frutas = ["pera", "manzana", "melón", "sandía", "mango"];
  }

  insertaNumero() {
    this.numeros.push(this.numero);
    this.numero = null; // limpia el input
  }

  insertaFruta() {
    this.frutas.push(this.fruta);
    this.fruta = null; // limpia el input
  }

}


