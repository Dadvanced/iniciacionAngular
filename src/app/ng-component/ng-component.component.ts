import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-component',
  templateUrl: './ng-component.component.html',
  styleUrls: ['./ng-component.component.css']
})
export class NgComponentComponent implements OnInit {

  numeros: number[];
  frutas: string[];

  constructor() { }

  ngOnInit() {
    this.numeros = [1, 5, 8, 24, 32, 11, 55];
    this.frutas = ["pera", "manzana", "melón", "sandía", "mango"];
  }

}
