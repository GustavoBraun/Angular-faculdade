import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent {
  mostrar : boolean = true
  nome: string = "Elise"
  testeComElse: boolean = false
  constructor(){}
}
