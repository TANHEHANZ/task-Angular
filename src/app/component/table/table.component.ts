import { Component, EventEmitter, Input, Output } from '@angular/core';
import { datos } from './data';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() objetosDatos: datos | any = null;
  /* @Output() envioParam: string | any = null; */

  @Output() enviaraPadre = new EventEmitter<string>();

  envioParam(nameDAta: string) {
    this.enviaraPadre.emit(nameDAta)
  }
}
