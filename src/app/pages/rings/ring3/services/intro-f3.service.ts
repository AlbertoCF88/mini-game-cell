import { Injectable } from '@angular/core';
import IntroGohanF3 from '../../models/extendedmodels/IntroGohanF3';
import IntroCellF3 from '../../models/extendedmodels/IntroCellF3';
import C16 from '../../models/C16';
import { Joystick } from '../../shared/components/joystick/Interface/Joystick';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntroF3Service {

  gohan: IntroGohanF3 = new IntroGohanF3(100, 1, 3, 0);
  cell: IntroCellF3 = new IntroCellF3(100, 1, 5, 0);
  c16: C16 = new C16();

  joystick: Joystick;
//TODO cambiar a true
  private _presentacion = new BehaviorSubject<boolean>(false);
  presentacion$ = this._presentacion.asObservable();

  constructor() {
    this.joystick = {
      ocultarBotones: true,
      ocultarBtnPulsar: false,
      ocultarTexto: false,
      texto: '',
    }
  }

  private barraGohan() {
    //vida en la vista
    this.gohan.vidaBarraGohan = (this.gohan.vidaGohan * 1) / 100;
  }

  presentacionF3() {
    this.gohan.defensaSS1 = true;
    this.cell.base = true
    setTimeout(() => {
      this.cell.base = false
      this.cell.carga = true;
      let tiempo: any = setInterval(() => {
        this.cell.acumularCargaCell = this.cell.acumularCargaCell + 1;
        if (this.cell.acumularCargaCell == 5) {
          clearInterval(tiempo);
          this.cell.carga = false;
          this.cell.base = true;
          this.cell.bocadillo1 = true;
          setTimeout(() => {
            this.cell.bocadillo1 = false;
            this.cell.bocadillo2 = true;
            setTimeout(() => {
              this.cell.bocadillo1 = false;
              this.cell.bocadillo2 = false;
              this.cell.bocadillo3 = true;
              setTimeout(() => {
                this.cell.bocadillo3 = false;
                this.activarGif();
              }, 5000);
            }, 5000);
          }, 3500);
        }
      }, 700);
    }, 1000);
  }

  private activarGif() {
    this.joystick.ocultarBtnPulsar = true;
    this.gohan.defensaSS1 = false;
    this.cell.base = false;
    this.cell.gifOstias = true;
    let tiempo: any = setInterval(() => {
      this.gohan.vidaGohan = this.gohan.vidaGohan - 2;
      this.barraGohan();
      if (this.gohan.vidaGohan <= 80) {
        clearInterval(tiempo);
        //no hace nada aunque pulse el btn, es solo por fastidiar
        this.joystick.ocultarBtnPulsar = false;
        this.gohan.baseSS1 = true;
        this.cell.base = true;
        this.cell.gifOstias = false;
        this.cell.bocadillo4 = true;
        setTimeout(() => {
          this.cell.bocadillo4 = false;
          this.entradaC16();
        }, 2800);
      }
    }, 700);
  }

  private entradaC16() {
    this.c16.raya = true;
    setTimeout(() => {
      this.c16.raya = false;
      this.c16.base = true;
      setTimeout(() => {
        this.c16.bocadillo1 = true;
        setTimeout(() => {
          this.c16.bocadillo1 = false;
          this.c16.base = false;
          this.c16.ataque = true;
          this.cell.base = false;
          this.cell.atacaMini = true;
          setTimeout(() => {
            this.cell.atacaMini = false;
            this.cell.base = true;
            this.c16.cabeza = true;
            this.c16.bocadillo2 = true;
            setTimeout(() => {
              this.c16.bocadillo2 = false;
              this.c16.bocadillo3 = true;
              setTimeout(() => {
                this.c16.bocadillo3 = false;
                this.c16.cabeza = false;
                this.transformacionGohan();
              }, 3600);
            }, 3100);
          }, 6500);
        }, 4000);
      }, 3000);
    }, 2100);
  }

  private transformacionGohan() {
    this.gohan.baseSS1 = false;
    this.gohan.cargaSS2 = true;
    setTimeout(() => {
      this.gohan.maximaEnergiaGohan = 5;
      this.gohan.acumularCargaGohan = 5;
      this.gohan.cargaSS2 = false;
      this.gohan.baseSS2 = true;
      this.gohan.vidaGohan = 100;
      this.barraGohan();
      setTimeout(() => {
        this._presentacion.next(false);
      }, 3000);
    }, 3500);
  }

}
