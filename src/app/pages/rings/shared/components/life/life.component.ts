import { Component, Input, OnInit } from '@angular/core';

import Gohan from '../../../models/Gohan';
import Cell from '../../../models/Cell';


@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss'],
})
export class LifeComponent implements OnInit {
  //como las varibles que le pasa el padre son de tipo model, le pasa la referencia del objeto y no es una copia
  @Input() gohan!: Gohan;
  @Input() cell!: Cell;

  public userName="Gohan";

  constructor() { }

  ngOnInit(): void {
    this.buscarNombre();
  }
  private buscarNombre() {
    const nombreGuardado = localStorage.getItem('nombreMinigameCell');
    if (nombreGuardado) {
      this.userName = nombreGuardado;
    }
  }
}
