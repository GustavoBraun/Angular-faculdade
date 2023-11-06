import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Gustavo';
  userData = {
    email : "gustavo.n.braun@outlook.com.br",
    funcao : "admin"
  }
  
  title = 'angular-projeto';

  constructor() {}
}
