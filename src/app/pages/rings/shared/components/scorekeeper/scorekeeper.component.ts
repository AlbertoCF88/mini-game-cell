import { Component, Input, OnInit } from '@angular/core';
import Gohan from '../../../models/Gohan';
import Cell from '../../../models/Cell';
import GohanF1 from '../../../models/extendedmodels/GohanF1';
import CellF1 from '../../../models/extendedmodels/CellF1';
import GohanF2 from '../../../models/extendedmodels/GohanF2';
import CellF2 from '../../../models/extendedmodels/CellF2';
import { Fase1Service } from '../../../ring1/services/fase1.service';
import { Fase2Service } from '../../../ring2/services/fase2.service';
import GohanF3 from '../../../models/extendedmodels/GohanF3';
import CellF3 from '../../../models/extendedmodels/CellF3';
import { Fase3Service } from '../../../ring3/services/fase3.service';

@Component({
  selector: 'app-scorekeeper',
  templateUrl: './scorekeeper.component.html',
  styleUrls: ['./scorekeeper.component.scss'],
})
export class ScorekeeperComponent implements OnInit {

  @Input() gohan!: any;
  @Input() cell!: any;
  @Input() servicio!: any;//cualquier servicio pasado por padre

  @Input() gif!: string;//url del gif
  @Input() ruta!: string;
  @Input() texto!: string;

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
    if (this.gohan instanceof GohanF2) {
      this.gohan as GohanF2;
    }
    if (this.gohan instanceof GohanF3) {
      this.gohan as GohanF3;
    }
    // cell
    if (this.cell instanceof Cell) {
      this.cell as Cell;
    }
    if (this.cell instanceof CellF1) {
      this.cell as CellF1;
    }
    if (this.cell instanceof CellF2) {
      this.cell as CellF2;
    }
    if (this.cell instanceof CellF3) {
      this.cell as CellF3;
    }
    // excepcion
    if (!(this.gohan instanceof Gohan) && !(this.gohan instanceof GohanF1) && !(this.gohan instanceof GohanF2) && !(this.gohan instanceof GohanF3)) {
      throw new Error('no es una instancia valida Gohan');
    }
    if (!(this.cell instanceof Cell) && !(this.cell instanceof CellF1) && !(this.cell instanceof CellF2) && !(this.cell instanceof CellF3)) {
      throw new Error('no es una instancia valida Cell');
    }
    // servicios
    if (this.servicio instanceof Fase1Service) {
      this.servicio as Fase1Service;
    }
    if (this.servicio instanceof Fase2Service) {
      this.servicio as Fase2Service;
    }
    if (this.servicio instanceof Fase3Service) {
      this.servicio as Fase3Service;
    }
    if (!(this.servicio instanceof Fase1Service) && !(this.servicio instanceof Fase2Service) && !(this.servicio instanceof Fase3Service)) {
      throw new Error('no es una instancia valida de servicio');
    }
  }

  reintentar() {
    //NO entiendo porque es necesario entrar dos veces para este componente y el componente
    // de las imagenes refresquen los cambios.
    //curiosamente si entra dos veces funciona bien, supongo que tendre dos instancias diferentes y no se donde
    if (this.servicio instanceof Fase1Service) {
      for (let index = 0; index <= 1; index++) {
        this.servicio.reintentar();
      }
    }

    if (this.servicio instanceof Fase2Service) {
      this.servicio.reintentar();
    }

    if (this.servicio instanceof Fase3Service) {
      this.servicio.reintentar();
    }
  }

  mostrarGifWin() {
    if (!Fase3Service) {
      this.servicio.winGif$.subscribe(
        (winGif: boolean) => {
          if (winGif) {
            this.activarGifWin = true;
            this.mostrarBtnNext();
          }
        });
    }
  }

  mostrarBtnNext() {
    setTimeout(() => {
      this.btnActivo = true;
    }, 2100);
  }

}
