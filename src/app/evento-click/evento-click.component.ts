import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evento-click',
  templateUrl: './evento-click.component.html',
  styleUrls: ['./evento-click.component.css']
})
export class EventoClickComponent implements OnInit {

  n: number;

  constructor() { }

  ngOnInit() {
    this.n = 0;
  }

  generaValor() {
    this.n = this.n = Math.floor(Math.random() * 10 + 1);
  }

  incrementaValor() {
    this.n++;
  }

  decrementaValor() {
    this.n--;
  }

}
