import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laboratorio-10';

  constructor() {}

  onSubmit() {
    console.log('El formulario fue enviado')
  }
}
