import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-saludo',
  templateUrl: './mi-saludo.component.html',
  styleUrls: ['./mi-saludo.component.css']
})
export class MiSaludoComponent implements OnInit {

  textoSaludo: string;

  constructor() {
    this.textoSaludo = 'holaaaaa';
   }

  ngOnInit() {
  }

}
