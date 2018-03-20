import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-datos',
  templateUrl: './entrada-datos.component.html',
  styleUrls: ['./entrada-datos.component.css']
})
export class EntradaDatosComponent implements OnInit {

  palabra: string;

  constructor() { }

  ngOnInit() {
    this.palabra = "";
  }

  actualizaPalabra(cadena: string) {
    this.palabra = cadena;
  }

  limpiaTexto() {
    this.palabra = "";
  }

}
