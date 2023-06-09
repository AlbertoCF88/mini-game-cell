import { Component, Input, OnInit } from '@angular/core';
import Gohan from '../../../models/Gohan';
import Cell from '../../../models/Cell';
import GohanF1 from '../../../models/extendedmodels/GohanF1';
import CellF1 from '../../../models/extendedmodels/CellF1';
import GohanF2 from '../../../models/extendedmodels/GohanF2';
import CellF2 from '../../../models/extendedmodels/CellF2';
import { Fase1Service } from '../../../ring1/services/fase1.service';
import { Fase2Service } from '../../../ring2/services/fase2.service';

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
    // excepcion
    if (!(this.gohan instanceof Gohan) && !(this.gohan instanceof GohanF1)&& !(this.gohan instanceof GohanF2)) {
      throw new Error('no es una instancia valida Gohan');
    }
    if (!(this.cell instanceof Cell) && !(this.cell instanceof CellF1)&& !(this.cell instanceof CellF2)) {
      throw new Error('no es una instancia valida Cell');
    }
    // servicios
    if (this.servicio instanceof Fase1Service) {
      this.servicio as Fase1Service;
    }
    if (this.servicio instanceof Fase2Service) {
      this.servicio as Fase2Service;
    }
    if (!(this.servicio instanceof Fase1Service) && !(this.servicio instanceof Fase2Service)){
      throw new Error('no es una instancia valida de servicio');
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
