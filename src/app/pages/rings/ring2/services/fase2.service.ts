import { Injectable } from '@angular/core';

import { Joystick } from '../../shared/components/joystick/Interface/Joystick';
import { BehaviorSubject } from 'rxjs';
import GohanF2 from '../../models/extendedmodels/GohanF2';
import CellF2 from '../../models/extendedmodels/CellF2';
import { LocalStorageGuard } from '../../models/localStorageInterface';


@Injectable({
  providedIn: 'root'
})
export class Fase2Service {
  gohan: GohanF2 = new GohanF2(100, 1, 4, 0);
  cell: CellF2 = new CellF2(100, 1, 4, 0);

  //Condiciones fase2
  //cadenas son las veces aleatoriamente que va a generar botones cadena
  cadenas: number = 0;
  //vecesEntrasRandomSwitch es un contador para salir del bucle randomSwitch
  vecesEntrasRandomSwitch: number = 0

  //contadorGolpeBoton sirve para contar las veces que le das a cada btn que sale en pantalla
  contadorGolpeBoton: number = 0;

  joystick: Joystick;

  //_btnActivar para activar y descativar el boton del joystick component
  private _btnActivar = new BehaviorSubject<boolean>(false);
  btnActivar$ = this._btnActivar.asObservable();
  //numero del estilo a plicar al boton para mostras en pantalla desde joystick component
  private _btnStyle = new BehaviorSubject<number>(0);
  btnStyle$ = this._btnStyle.asObservable();

  //unionbola activar img bola gigante
  private _unionbola = new BehaviorSubject<boolean>(false);
  unionbola$ = this._unionbola.asObservable();
  //mover unionBola
  private _kameVsStyle = new BehaviorSubject<boolean>(false);
  kameVsStyle$ = this._kameVsStyle.asObservable();

  private _cellBola = new BehaviorSubject<boolean>(false);
  cellBola$ = this._cellBola.asObservable();
  //fallos hace que la bola final sea mas rapida o mas lenta segun los fallos de las pulsaciones de los botones
  fallos: number = 400;

  //activar imagen explosion
  explosion: boolean = false;
  // controlar si pierdes

  private _winGif = new BehaviorSubject<boolean>(false);
  winGif$ = this._winGif.asObservable();

  //manejar el localStorage los avances de las fases
  localStorageGuard: LocalStorageGuard;

  constructor() {
    this.localStorageGuard = {
      fase1: true,
      fase2: true,
      fase3: false,
    }

    this.joystick = {
      ocultarBotones: true,
      ocultarBtnPulsar: false,
      ocultarTexto: false,
      texto: 'Ahora debes pulsar el boton 👊 repetidas veces cuando salga.'
    }
    this.randomCadenas()
  }

  cambiarValorWinGif(nuevoValor: boolean) {
    this._winGif.next(nuevoValor);
  }

  descansoPjs(descanso: boolean) {
    this.gohan.gohanBase = descanso;
    this.cell.baseCell = descanso;
  }

  private btncontador() {
    this.contadorGolpeBoton++;
  }
  public barraCEll() {
    //vida en la vista
    this.cell.vidaBarraCell = (this.cell.vidaCell * 1) / 100;
  }
  public barraGohan() {
    //vida en la vista
    this.gohan.vidaBarraGohan = (this.gohan.vidaGohan * 1) / 100;
  }

  private randomCadenas() {
    this.cadenas = Math.floor(Math.random() * 3) + 8;
  }

  public randomSwitch() {
    this.joystick.texto = '';
    this.vecesEntrasRandomSwitch++
    if (this.cadenas === this.vecesEntrasRandomSwitch) {
      //salir del bucles
      this.combateFinal();
      return;
    }
    switch (Math.floor(Math.random() * 4) + 1) {
      case 1:
        this.cadena1();
        break;
      case 2:
        this.cadena2();
        break;
      case 3:
        this.cadena3();
        break;
      case 4:
        this.cadena4();
        break;
    }
  }

  private cadena1() {
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
          this.joystick.texto = 'Gohan se anota un tanto';
          this.contadorGolpeBoton = 0;
          this.cell.patadaCell = false;
          this.cell.heridoCell1 = true;
          this.cell.vidaCell = this.cell.vidaCell - 8;
          this.barraCEll();
          setTimeout(() => {
            this.resetarAnimaciones()
            this.randomSwitch();
          }, 2000);
        } else {
          //pierdes
          this.joystick.texto = 'Cell se anota un tanto';
          this.fallos = this.fallos - 10;
          this.contadorGolpeBoton = 0;
          this.gohan.golpeGohan1 = false;
          this.gohan.heridaGohan1 = true;
          this.gohan.vidaGohan = this.gohan.vidaGohan - 8;
          this.barraGohan();
          this.fallos = this.fallos - 50;
          setTimeout(() => {
            this.resetarAnimaciones()
            this.randomSwitch();
          }, 2000);
          return;
        }
      }, 2000);
    }, 2000);
    return;
  }

  private cadena2() {
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
          this.joystick.texto = 'Gohan se anota un tanto';
          this.contadorGolpeBoton = 0;
          this.cell.golpeIzCell = false;
          this.cell.heridoCell2 = true;
          this.cell.vidaCell = this.cell.vidaCell - 8;
          this.barraCEll();
          setTimeout(() => {
            this.resetarAnimaciones()
            this.randomSwitch();
          }, 2000);
        } else {
          //pierdes
          this.joystick.texto = 'Cell se anota un tanto';
          this.fallos = this.fallos - 10;
          this.contadorGolpeBoton = 0;
          this.gohan.punioGohan2 = false;
          this.gohan.heridaGohan3 = true;
          this.gohan.vidaGohan = this.gohan.vidaGohan - 8;
          this.barraGohan();
          this.fallos = this.fallos - 50;
          setTimeout(() => {
            this.resetarAnimaciones()
            this.randomSwitch();
          }, 2000);
          return;
        }
      }, 2000);
    }, 2000);
    return;
  }

  private cadena3() {
    this.descansoPjs(false);
    this.gohan.rayaGohan = true;
    this.cell.rayaCell = true;
    setTimeout(() => {
      this.cell.punioCell = true;
      this.gohan.golpeGohan2 = true;
      this._btnActivar.next(true);
      this._btnStyle.next(3);
      setTimeout(() => {
        this.btncontador();
        this._btnActivar.next(false);
        if (this.contadorGolpeBoton >= 10) {
          //ganas
          this.joystick.texto = 'Gohan se anota un tanto';
          this.contadorGolpeBoton = 0;
          this.cell.punioCell = false;
          this.cell.heridoCell3 = true;
          this.cell.vidaCell = this.cell.vidaCell - 8;
          this.barraCEll();
          setTimeout(() => {
            this.resetarAnimaciones()
            this.randomSwitch();
          }, 2000);
        } else {
          //pierdes
          this.joystick.texto = 'Cell se anota un tanto';
          this.fallos = this.fallos - 10;
          this.contadorGolpeBoton = 0;
          this.gohan.golpeGohan2 = false;
          this.gohan.heridaGohan4 = true;
          this.gohan.vidaGohan = this.gohan.vidaGohan - 8;
          this.barraGohan();
          this.fallos = this.fallos - 50;
          setTimeout(() => {
            this.resetarAnimaciones()
            this.randomSwitch();
          }, 2000);
          return;
        }
      }, 2000);
    }, 2000);
    return;
  }

  private cadena4() {
    this.descansoPjs(false);
    this.gohan.rayaGohan = true;
    this.cell.rayaCell = true;
    setTimeout(() => {
      this.cell.golpeDeCell = true;
      this.gohan.punioGohan1 = true;
      this._btnActivar.next(true);
      this._btnStyle.next(4);
      setTimeout(() => {
        this.btncontador();
        this._btnActivar.next(false);
        if (this.contadorGolpeBoton >= 10) {
          //ganas
          this.joystick.texto = 'Gohan se anota un tanto';
          this.contadorGolpeBoton = 0;
          this.cell.golpeDeCell = false;
          this.cell.heridoCell4 = true;
          this.cell.vidaCell = this.cell.vidaCell - 8;
          this.barraCEll();
          setTimeout(() => {
            this.resetarAnimaciones()
            this.randomSwitch();
          }, 2000);
        } else {
          //pierdes
          this.joystick.texto = 'Cell se anota un tanto';
          this.fallos = this.fallos - 10;
          this.contadorGolpeBoton = 0;
          this.gohan.punioGohan1 = false;
          this.gohan.heridaGohan2 = true;
          this.gohan.vidaGohan = this.gohan.vidaGohan - 8;
          this.barraGohan();
          this.fallos = this.fallos - 50;
          setTimeout(() => {
            this.resetarAnimaciones()
            this.randomSwitch();
          }, 2000);
          return;
        }
      }, 2000);
    }, 2000);
    return;
  }

  private combateFinal() {
    this.gohan.rayaGohan = true;
    this.cell.rayaCell = true;
    setTimeout(() => {
      this.descansoPjs(false);
      this.gohan.kameGohan = true;
      this.cell.kameCell = true;
      this.gohan.acumularCargaGohan = 0;
      this.cell.acumularCargaCell = 0;
      setTimeout(() => {
        setTimeout(() => {
          this._unionbola.next(true)
          this.joystick.ocultarBtnPulsar = true;
          setTimeout(() => {
            this._cellBola.next(true);
          }, 500);
        }, 2000);
      }, 2000);
    }, 2000);
  }

  choqueKames() {
    //cada vez que es pulsado este btn mueve la bola gigante
    this._kameVsStyle.next(true)
  }

  private resetarAnimaciones() {
    this.descansoPjs(false)
    /**Gohan */
    this.gohan.rayaGohan = false;
    this.gohan.golpeGohan1 = false;
    this.gohan.golpeGohan2 = false;
    this.gohan.punioGohan1 = false;
    this.gohan.punioGohan2 = false;
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

  resetearFase() {
    this.cell.poderCell = 43;
    this.gohan.vidaGohan = 100;
    this.cell.vidaCell = 100;
    this.gohan.acumularCargaGohan = 4;
    this.cell.acumularCargaCell = 4;
    this.gohan.maximaEnergiaGohan = 4;
    this.gohan.cargaGohan = false;
    this.cell.cargaCell = false;
    this.cell.maximaEnergiaCell = 4;
    this.cell.heridokameCell = false;
    this.cell.kameCell = false;
    this.cell.cellPierdeCombate = false;
    this.cell.bocadillo = false;
    this.gohan.kameGohan = false;
    this.gohan.gohanPierdeCombate = false;

    this.fallos = 400;
    this.explosion = false;
    this.barraGohan();
    this.barraCEll();
    this.cadenas = 0;
    this.vecesEntrasRandomSwitch = 0;
    this.randomCadenas()
    this.randomSwitch();
  }

  // ganador() lo compureba game fase2

  localStorage() {
    this.localStorageGuard.fase3 = true;
    localStorage.setItem("localStorageGuard", JSON.stringify(this.localStorageGuard));
  }

  reintentar() {
    this.resetarAnimaciones();
    this.resetearFase()
  }

}
