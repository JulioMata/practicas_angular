import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica2',
  templateUrl: './practica2.component.html',
  styleUrls: ['./practica2.component.css']
})
export class Practica2Component implements OnInit {
    tablas: string[] = ['2x1', '2x2', '2x3', '2x4', '2x5'];
    resultados: number[] = [2,4,6,8,10];
    mostrar = false;

  constructor() { }

  ngOnInit(): void {
  }

}
