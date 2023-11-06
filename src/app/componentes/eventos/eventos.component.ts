import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  mostrar: boolean = false

  mostrarMensagem() : void {

    this.mostrar = !this.mostrar;
  }
}
