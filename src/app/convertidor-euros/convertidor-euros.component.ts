import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'convertidor-euros',
  templateUrl: './convertidor-euros.component.html',
  styleUrls: ['./convertidor-euros.component.css']
})
export class ConvertidorEurosComponent implements OnInit {

  euros: number;
  pesetas: number;

  constructor() { }

  ngOnInit() {
    this.limpia();
  }

  limpia() {
    this.euros = 0;
    this.pesetas = 0;
  }

  actualizaPesetas(n: number) {
    this.pesetas = n * 166.386;
  }

  actualizaEuros(n: number) {
    this.euros = n / 166.386;
  }

}
