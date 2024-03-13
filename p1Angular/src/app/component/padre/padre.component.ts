import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  @Input() usernombre = '';

  dato = [
    {
      id: 1,
      nombre: "hola"
    },
    {
      id: 2,
      nombre: "como"
    }, {
      id: 3,
      nombre: "estas"
    }, {
      id: 4,
      nombre: ">"
    },
  ]
  estadoConficional = false
  funcClick = () => {
    alert("alerta generada")
  }

}
