import { Injectable } from '@angular/core';

import { Joystick } from '../../shared/components/joystick/Interface/Joystick';
import { BehaviorSubject, Subject } from 'rxjs';
import GohanF2 from '../../models/extendedmodels/GohanF2';
import CellF2 from '../../models/extendedmodels/CellF2';


@Injectable({
  providedIn: 'root'
})
export class Fase2Service {

  gohan: GohanF2 = new GohanF2(100, 1, 3, 0);
  cell: CellF2 = new CellF2(100, 1, 3, 0);

  //Condiciones fase2

  //contadorGolpeBoton sirve para contar las veces que le das a cada btn que sale en pantalla
  contadorGolpeBoton: number = 0;

  joystick: Joystick;
  //botones que se activan
  private _btnActivar = new BehaviorSubject<boolean>(false);
  btnActivar$ = this._btnActivar.asObservable();
  //numero del estilo a plicar al boton
  private _btnStyle = new BehaviorSubject<number>(0);
  btnStyle$ = this._btnStyle.asObservable();
  //activar img bola gigante
  unionbola: boolean = false;
  //fallos hace que la bola final sea mas rapida o mas lenta segun los fallos de las pulsaciones de los botones
  fallos: number = 400;
  //activar imagen explosion
  explosion: boolean = false;
  constructor() {
    this.joystick = {
      ocultarBotones: true,
      ocultarBtnPulsar: false,
      ocultarTexto: false,
      texto: '',
    }
    this.descansoPjs(true);
    this.cadena2();
  }

  descansoPjs(descanso: boolean) {
    this.gohan.gohanBase = descanso;
    this.cell.baseCell = descanso;
  }

  btncontador() {
    this.contadorGolpeBoton++;
  }
  barraCEll() {
    //vida en la vista
    this.cell.vidaBarraCell = (this.cell.vidaCell * 1) / 100;
  }
  barraGohan() {
    //vida en la vista
    this.gohan.vidaBarraGohan = (this.gohan.vidaGohan * 1) / 100;
  }

  cadena1() {
    setTimeout(() => {
      this.descansoPjs(false);
      this.gohan.rayaGohan = true;
      this.cell.rayaCell = true;
      setTimeout(() => {
        this.cell.patadaCell = true;
        this.gohan.golpeGohan1 = true;
        this._btnActivar.next(true);
        this._btnStyle.next(1);
        setTimeout(() => {
          this.btncontador();
          this._btnActivar.next(false);
          if (this.contadorGolpeBoton >= 10) {
            //ganas
            this.contadorGolpeBoton = 0;
            this.cell.patadaCell = false;
            this.cell.heridoCell1 = true;
            this.cell.vidaCell = this.cell.vidaCell - 15;
            this.barraCEll();
            setTimeout(() => {
              this.resetarAnimaciones()
              //this.funCadena2();
            }, 2000);
          } else {
            //pierdes
            this.contadorGolpeBoton = 0;
            this.gohan.golpeGohan1 = false;
            this.gohan.heridaGohan1 = true;
            this.gohan.vidaGohan = this.gohan.vidaGohan - 15;
            this.barraGohan();
            this.fallos = this.fallos - 50;
            setTimeout(() => {
              this.resetarAnimaciones()
              // this.funCadena2();
            }, 2000);
            return;
          }
        }, 2000);
      }, 2000);
    }, 5000);
    return;
  }

  cadena2() {
    setTimeout(() => {
      this.descansoPjs(false);
      this.gohan.rayaGohan = true;
      this.cell.rayaCell = true;
      setTimeout(() => {
        this.cell.golpeIzCell = true;
        this.gohan.punioGohan2 = true;
        this._btnActivar.next(true);
        this._btnStyle.next(2);
        setTimeout(() => {
          this.btncontador();
          this._btnActivar.next(false);
          if (this.contadorGolpeBoton >= 10) {
            //ganas
            this.contadorGolpeBoton = 0;
            this.cell.golpeIzCell = false;
            this.cell.heridoCell2 = true;
            this.gohan.punioGohan2 = false;
            this.cell.vidaCell = this.cell.vidaCell - 15;
            this.barraCEll();
            setTimeout(() => {
              this.resetarAnimaciones()
              //this.funCadena2();
            }, 2000);
          } else {
            //pierdes
            this.contadorGolpeBoton = 0;
            this.gohan.punioGohan2 = false;
            this.gohan.heridaGohan3 = true;
            this.gohan.vidaGohan = this.gohan.vidaGohan - 15;
            this.barraGohan();
            this.fallos = this.fallos - 50;
            setTimeout(() => {
              this.resetarAnimaciones()
              // this.funCadena2();
            }, 2000);
            return;
          }
        }, 2000);
      }, 2000);
    }, 5000);
    return;
  }

  cadena3() {
    setTimeout(() => {
      this.descansoPjs(false);
      this.gohan.rayaGohan = true;
      this.cell.rayaCell = true;
      setTimeout(() => {
        this.cell.golpeIzCell = true;
        this.gohan.punioGohan2 = true;
        this._btnActivar.next(true);
        this._btnStyle.next(2);
        setTimeout(() => {
          this.btncontador();
          this._btnActivar.next(false);
          if (this.contadorGolpeBoton >= 10) {
            //ganas
            this.contadorGolpeBoton = 0;
            this.cell.golpeIzCell = false;
            this.cell.heridoCell2 = true;
            this.gohan.punioGohan2 = false;
            this.cell.vidaCell = this.cell.vidaCell - 15;
            this.barraCEll();
            setTimeout(() => {
              this.resetarAnimaciones()
              //this.funCadena2();
            }, 2000);
          } else {
            //pierdes
            this.contadorGolpeBoton = 0;
            this.gohan.punioGohan2 = false;
            this.gohan.heridaGohan3 = true;
            this.gohan.vidaGohan = this.gohan.vidaGohan - 15;
            this.barraGohan();
            this.fallos = this.fallos - 50;
            setTimeout(() => {
              this.resetarAnimaciones()
              // this.funCadena2();
            }, 2000);
            return;
          }
        }, 2000);
      }, 2000);
    }, 5000);
    return;
  }




  resetarAnimaciones() {
    this.descansoPjs(false)
    /**Gohan */
    this.gohan.rayaGohan = false;
    this.gohan.golpeGohan1 = false;
    this.gohan.golpeGohan2 = false;
    this.gohan.heridaGohan1 = false;
    this.gohan.heridaGohan2 = false;
    this.gohan.heridaGohan3 = false;
    this.gohan.heridaGohan4 = false;
    /**Cell */
    this.cell.rayaCell = false;
    this.cell.patadaCell = false;
    this.cell.punioCell = false;
    this.cell.golpeIzCell = false;
    this.cell.golpeDeCell = false;
    this.cell.heridoCell1 = false;
    this.cell.heridoCell2 = false;
    this.cell.heridoCell3 = false;
    this.cell.heridoCell4 = false;
  }
}
