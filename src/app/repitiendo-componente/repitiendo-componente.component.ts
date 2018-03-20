import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repitiendo-componente',
  templateUrl: './repitiendo-componente.component.html',
  styleUrls: ['./repitiendo-componente.component.css']
})
export class RepitiendoComponenteComponent implements OnInit {

  n: number;

  constructor() { }

  ngOnInit() {
    this.n = Math.floor(Math.random()*10 + 1);
  }

}
