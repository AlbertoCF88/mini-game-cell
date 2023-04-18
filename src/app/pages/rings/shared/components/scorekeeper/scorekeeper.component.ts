import { Component, Input, OnInit } from '@angular/core';
import Gohan from '../../../models/Gohan';
import Cell from '../../../models/Cell';

@Component({
  selector: 'app-scorekeeper',
  templateUrl: './scorekeeper.component.html',
  styleUrls: ['./scorekeeper.component.scss'],
})
export class ScorekeeperComponent implements OnInit {

  @Input() gohan!: Gohan;
  @Input() cell!: Cell;
  @Input() servicio!: any;//cualquier servicio pasado por padre

  activarGifWin: boolean = false;
  btnActivo: boolean = false;

  constructor() { }

  ngOnInit() {
    this.mostrarGifWin();
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
