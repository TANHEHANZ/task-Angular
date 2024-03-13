import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './component/padre/padre.component';
import { TableComponent } from './component/table/table.component';
import { datos } from './component/table/data';
import { NavComponent } from './component/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent, TableComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p1Angular';
  /* para manejar el paso de props mediante componentes  */
  nombre?: string;
  verEstado?: boolean = true;
  verTable?: boolean = false;

  constructor() {
    if (this.verEstado === true) {
      this.nombre = "hanz";
    }
  }
  /////// pasasndo objetos como parametros '
  objetosDatos: datos = {
    id: 1,
    date: new Date(),
    name: 'hanz',
    edad: 22

  }

  datoRecuperado = '';

  asignarAdatorecuperado(datosTable: string) {
    this.datoRecuperado = datosTable;
  }



}
