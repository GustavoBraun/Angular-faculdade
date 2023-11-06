import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  tamanho = '40px';
  fonte = 'arial';
  cor = 'red';
  classes_css = ['titulo-verde', 'titulo-pequeno']
  classe_sublinhado = 'titulo-sublinhado'
}
