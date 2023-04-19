import { Component, Input, OnInit } from '@angular/core';
import Gohan from '../../../models/Gohan';
import Cell from '../../../models/Cell';
import GohanF1 from '../../../models/extendedmodels/GohanF1';
import CellF1 from '../../../models/extendedmodels/CellF1';

@Component({
  selector: 'app-scorekeeper',
  templateUrl: './scorekeeper.component.html',
  styleUrls: ['./scorekeeper.component.scss'],
})
export class ScorekeeperComponent implements OnInit {

  @Input() gohan!: any;
  @Input() cell!: any;
  @Input() servicio!: any;//cualquier servicio pasado por padre

  activarGifWin: boolean = false;
  btnActivo: boolean = false;

  constructor() { }

  ngOnInit() {
    this.comprobarTipo();
    this.mostrarGifWin();
  }

  comprobarTipo() {
    if (this.gohan instanceof Gohan) {
      this.gohan as Gohan;
    }
    if (this.gohan instanceof GohanF1) {
      this.gohan as GohanF1;
    }
    // cell
    if (this.cell instanceof Cell) {
      this.cell as Cell;
    }
    if (this.cell instanceof CellF1) {
      this.cell as CellF1;
    }
  }


  reintentar() {
    //NO entiendo porque es necesario entrar dos veces para este componente y el componente
    // de las imagenes refresquen los cambios.
    //curiosamente si entra dos veces funciona bien
    for (let index = 0; index <= 1; index++) {
      this.servicio.reintentar();
    }
  }

  mostrarGifWin() {
    this.servicio.winGif$.subscribe(
      (winGif: boolean) => {
        if (winGif) {
          this.activarGifWin = true;
          this.mostrarBtnNext();
        }
      });
  }

  mostrarBtnNext() {
    setTimeout(() => {
      this.btnActivo = true;
    }, 2100);
  }

}
