import { Injectable } from '@angular/core';
import Gohan from '../../models/Gohan';
import Cell from '../../models/Cell'
import { Joystick } from '../../shared/components/joystick/Interface/Joystick';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fase1Service {
  // GOHAN
  // vida 100
  // vidaBarraGohan 1
  //maxima energia 3
  // acumularCargaGoha 3
  gohan = new Gohan(100, 1, 3, 3);
  //Cell
  // vida 200
  // vidaBarraCell 1
  //maxima energia 3
  // acumularCargaCell 3
  cell = new Cell(200, 1, 3, 3)

  //Condiciones fase1
  //contadorGolpeBoton sirve para no abusar de usar el mismo boton
  contadorGolpeBoton: number = 26;

  // controlar los estilos de kameVskame
  private _kameVsStyle = new BehaviorSubject<boolean>(false);
  kameVsStyle$ = this._kameVsStyle.asObservable();

  // controlar los estilos de kameVskame
  private _winGif = new BehaviorSubject<boolean>(false);
  winGif$ = this._winGif.asObservable();

  //manejar joystick con la misma instancia para todos los hijos del mismo padre
  joystick: Joystick = {
    ocultarBotones: false,
    ocultarBtnPulsar: false,
    ocultarTexto: false,
    texto: '',
  }

  constructor() {
    this.descansoPjs(true);
  }

  descansoPjs(descanso: boolean) {
    this.gohan.gohanBase = descanso;
    this.cell.baseCell = descanso;
  }

  kameVskame(activar: boolean) {
    this.gohan.kameGohan = activar;
    this.cell.kameCell = activar;
  }

  barraCEll() {
    //vida en la vista
    this.cell.vidaBarraCell = (this.cell.vidaCell * 1) / 200;
  }
  barraGohan() {
    //vida en la vista
    this.gohan.vidaBarraGohan = (this.gohan.vidaGohan * 1) / 100;
  }

  ganaGohankameVs() {
    this.joystick.texto = 'Gohan sale victorioso';
    this._kameVsStyle.next(true)
    setTimeout(() => {
      this.cell.kameContraCell = true;
      this.cell.heridoCell = true;
      this.kameVskame(false);
      this.gohan.ganaGohan = true;
      this.cell.kameContraCell = true;
      this.cell.vidaCell = this.cell.vidaCell - 50;
      this.barraCEll();
    }, 2000);
    setTimeout(() => {
      this.resetarAnimaciones();
    }, 4000);
  }

  ganaCellKameVs() {
    this.joystick.texto = 'Cell sale victorioso';
    this._kameVsStyle.next(true)
    setTimeout(() => {
      this.gohan.kameGohan = false;
    }, 2000);

    this.gohan.heridaGohan = true;
    this.gohan.vidaGohan = this.gohan.vidaGohan - 50;
    this.barraGohan();
    setTimeout(() => {
      this.resetarAnimaciones();
    }, 3500);
  }

  choqueKames() {
    //cada vez que es pulsado este btn mueve el kame
    this._kameVsStyle.next(true)
  }

  accionGolpe(golpe: string) {
    if (this.joystick.ocultarTexto == false) {
      this.gohan.rayaGohan = true;
      this.descansoPjs(false);
      this.joystick.ocultarTexto = true;
      this.accionCell(golpe);
      setTimeout(() => {
        this.joystick.ocultarBotones = true;
      }, 100);
    }
  }

  accionDefensa(defensa: string) {
    if (this.joystick.ocultarTexto == false) {
      this.contadorGolpeBoton = this.contadorGolpeBoton - 1;
      this.descansoPjs(false);
      this.joystick.ocultarTexto = true;
      this.gohan.defensaGohan = true;
      this.accionCell(defensa);
      setTimeout(() => {
        this.joystick.ocultarBotones = true;
      }, 100);
    }
  }
  accionCarga(carga: string) {
    if (this.joystick.ocultarTexto == false) {
      this.contadorGolpeBoton = this.contadorGolpeBoton - 1;
      this.descansoPjs(false);
      this.joystick.ocultarTexto = true;
      this.gohan.cargaGohan = true;
      this.gohan.acumularCargaGohan = this.gohan.acumularCargaGohan + 1;
      if (this.gohan.acumularCargaGohan == 4) {
        this.gohan.acumularCargaGohan = this.gohan.acumularCargaGohan - 1;
      }
      this.accionCell(carga);
      setTimeout(() => {
        this.joystick.ocultarBotones = true;
      }, 100);
    }
  }
  accionKi(ki: string) {
    if (this.joystick.ocultarTexto == false) {
      this.contadorGolpeBoton = this.contadorGolpeBoton - 1;
      this.descansoPjs(false);
      this.joystick.ocultarTexto = true;
      this.accionCell(ki);
      setTimeout(() => {
        this.joystick.ocultarBotones = true;
      }, 100);
    }
  }

  // *CEll*************************CEll*********************CEll*** */
  accionCell(accion: string) {
    let random = Math.floor(Math.random() * (10 - 0) + 0);
    switch (accion) {
      case 'golpe':
        if (this.contadorGolpeBoton <= 0) {
          this.contadorGolpeBoton = 0;
        }
        if (random >= 7) {
          //daño directo
          this.cell.vidaCell = this.cell.vidaCell - 10;
          this.barraCEll();
          this.contadorGolpeBoton = this.contadorGolpeBoton + 1;
          this.gohan.rayaGohan = true;
          this.gohan.golpeGohan = true;
          this.descansoPjs(false);
          this.cell.heridoCell = true;
          this.joystick.texto = 'Cell recibe daño';
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 2000);
        } else if (random >= 4 && random <= 6) {
          //esquiva cell
          this.contadorGolpeBoton = this.contadorGolpeBoton + 1;
          this.cell.baseCell = false;
          this.gohan.golpeGohan = true;
          this.cell.esquivaCell = true;
          this.joystick.texto = 'Cell esquiva el ataque';
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 2000);
        } else if (
          random >= 0 &&
          random <= 3 &&
          this.contadorGolpeBoton >= 2 &&
          this.cell.acumularCargaCell >= 1
        ) {
          //Taiyoken
          this.contadorGolpeBoton = 0;
          this.cell.destelloCell = true;
          this.cell.acumularCargaCell = this.cell.acumularCargaCell - 1;
          this.joystick.texto = 'Cell utiliza Taiyoken!';
          this.gohan.vidaGohan = this.gohan.vidaGohan - 5;
          this.barraGohan();
          this.gohan.acumularCargaGohan = this.gohan.acumularCargaGohan - 1;
          if (this.gohan.acumularCargaGohan < 0) {
            this.gohan.acumularCargaGohan = 0;
          }
          this.barraGohan();
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 2500);
        } else {
          //contra de cell
          this.contadorGolpeBoton = this.contadorGolpeBoton + 1;
          this.cell.baseCell = false;
          this.gohan.golpeGohan = true;
          this.cell.esquivaCell = true;
          this.cell.contraCell = true;
          this.joystick.texto = 'Cell contraataca!';
          setTimeout(() => {
            this.gohan.vidaGohan = this.gohan.vidaGohan - 10;
            this.barraGohan();
          }, 1000);
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 2000);
        }

        break;
      case 'defensa':

        if (random >= 9) {
          this.cell.baseCell = true;
          this.joystick.texto = 'Cell no hace nada';
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 2000);
        }
        if (random >= 6 && random <= 8) {
          if (random == 7 || random == 8) {
            this.cell.golpeCell = true;
            this.joystick.texto = 'Cell ataca';
            this.gohan.vidaGohan = this.gohan.vidaGohan - 2;
            this.barraGohan();
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 2000);
          } else {
            this.cell.golpeCell = true;
            this.gohan.contraGohan = true;
            setTimeout(() => {
              this.gohan.defensaGohan = false;
              this.cell.golpeCell = false;
              this.joystick.texto = 'Gohan Contraataca!';
              this.cell.vidaCell = this.cell.vidaCell - 20;
              this.barraCEll();
            }, 2000);
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 4000);
          }
        }

        if (random >= 2 && random <= 5) {
          if (this.cell.acumularCargaCell == 3) {
            this.cell.kameCell = true;
            this.cell.acumularCargaCell = 0;
            this.joystick.texto = 'Cell utiliza Kamehameha';
            setTimeout(() => {
              this.gohan.vidaGohan = this.gohan.vidaGohan - 12;
              this.barraGohan();
            }, 2000);
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 6000);
          } else {
            this.cell.cargaCell = true;
            this.cell.acumularCargaCell = this.cell.acumularCargaCell + 1;
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 2100);
          }
        }
        if (random >= 0 && random <= 1) {
          if (this.cell.acumularCargaCell == 0) {
            this.cell.cansadoCell = true;
            this.joystick.texto = 'Cell parece cansado';
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 2100);
          } else if (this.cell.acumularCargaCell == 1) {
            this.cell.cargaCell = true;
            setTimeout(() => {
              this.cell.acumularCargaCell = this.cell.acumularCargaCell + 1;
              this.resetarAnimaciones();
            }, 2100);
          } else if (this.cell.acumularCargaCell == 2) {
            this.cell.cargaCell = true;
            setTimeout(() => {
              this.cell.acumularCargaCell = this.cell.acumularCargaCell + 1;
              this.resetarAnimaciones();
            }, 2100);
          } else if (this.cell.acumularCargaCell == 3) {
            this.cell.kameCell = true;
            setTimeout(() => {
              this.joystick.texto = 'Cell utiliza kamehameha';
              this.gohan.vidaGohan = this.gohan.vidaGohan - 12;
              this.barraGohan();
            }, 2000);
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 6000);
            this.cell.acumularCargaCell = 0;
          }
        }

        break;
      case 'carga':
        if (this.cell.acumularCargaCell <= 2) {
          this.cell.cargaCell = true;
          this.cell.acumularCargaCell = this.cell.acumularCargaCell + 1;
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 2100);
        } else {
          //Cell utiliza kame
          this.cell.kameCell = true;
          this.gohan.heridaGohan = true;
          this.cell.acumularCargaCell = 0;
          this.joystick.texto = 'Gohan recibe un duro ataque!';
          setTimeout(() => {
            this.gohan.vidaGohan = this.gohan.vidaGohan - 24;
            this.barraGohan();
          }, 2000);
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 5900);
        }
        break;
      case 'ki':
        if (this.gohan.acumularCargaGohan == 3 && this.cell.acumularCargaCell == 3) {
          //activar posiciones de kames
          this.kameVskame(true);
          setTimeout(() => {
            this.kameVskame(true);
            //habilitar btn choqueKames()
            this.joystick.ocultarBtnPulsar = true;
            this._kameVsStyle.next(true)
          }, 3000);

          setTimeout(() => {
            //duracion del combate de kames
            this.joystick.ocultarBtnPulsar = false;
            if (
              (this.contadorGolpeBoton < 41 && this.cell.vidaCell >= 60) ||
              (this.contadorGolpeBoton < 47 && this.cell.vidaCell < 60)
            ) {
              this.ganaCellKameVs()
            } else {
              this.ganaGohankameVs();
            }
          }, 13200);

          this.cell.acumularCargaCell = 0;
          this.gohan.acumularCargaGohan = 0;
          break;

        } else if (this.gohan.acumularCargaGohan == 3) {
          this.cell.baseCell = true;
          this.gohan.kameGohan = true;
          this.gohan.acumularCargaGohan = 0;
          setTimeout(() => {
            this.cell.baseCell = false;
            this.cell.heridoCell = true;
            this.cell.kameContraCell = true;
            this.joystick.texto = 'Cell recibe daño';
            this.cell.vidaCell = this.cell.vidaCell - 30;
            this.barraCEll();
          }, 4100);
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 6000);
          break;
        } else if (this.cell.acumularCargaCell == 3) {
          this.cell.kameCell = true;
          this.joystick.texto = 'Gohan parece cansado';
          this.gohan.cansadoGohan = true;
          this.cell.acumularCargaCell = 0;
          this.gohan.heridaGohan = true;
          setTimeout(() => {
            this.joystick.texto = 'Gohan recibe un duro ataque!';
            this.gohan.cansadoGohan = false;
            this.gohan.vidaGohan = this.gohan.vidaGohan - 30;
            this.barraGohan();
          }, 2000);
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 5500);
          break;
        } else {
          this.joystick.texto = 'Gohan parece cansado';
          this.gohan.cansadoGohan = true;
          this.cell.cargaCell = true;
          this.cell.acumularCargaCell = this.cell.acumularCargaCell + 1;
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 2100);
          break;
        }
      default:
    }
  }

  resetarAnimaciones() {
    this._kameVsStyle.next(false)
    this.joystick.ocultarBotones = false;
    this.joystick.texto = '';
    this.descansoPjs(true);
    this.joystick.ocultarTexto = false;
    this.kameVskame(false);
    this.cell.poderCell = 40;
    this.contadorGolpeBoton = 26;
    this.joystick.ocultarBtnPulsar = false;
    /**Gohan */
    this.gohan.rayaGohan = false,
      this.gohan.golpeGohan = false,
      this.gohan.defensaGohan = false,
      this.gohan.contraGohan = false,
      this.gohan.cargaGohan = false,
      this.gohan.kameGohan = false,
      this.gohan.heridaGohan = false,
      this.gohan.ganaGohan = false,
      this.gohan.cansadoGohan = false,
      this.gohan.heridaKame = false,
      this.gohan.gohanPierdeCombate = false,
      /**Cell */
      this.cell.esquivaCell = false,
      this.cell.contraCell = false,
      this.cell.heridoCell = false,
      this.cell.golpeCell = false,
      this.cell.cargaCell = false,
      this.cell.cansadoCell = false,
      this.cell.destelloCell = false,
      this.cell.kameCell = false,
      this.cell.kameContraCell = false,
      this.cell.cellPierdeCombate = false,
      //comprobacion ganador
      this.ganador();
  }

  ganador() {
    if (this.cell.vidaBarraCell <= 0) {
      this.joystick.ocultarBotones = true;
      //gana gohan
      this.gohan.gohanBase = true;
      this.cell.baseCell = false;
      this.cell.cellPierdeCombate = true;
      setTimeout(() => {
        this._winGif.next(true);
      }, 3500);
    } else if (this.gohan.vidaBarraGohan <= 0) {
      this.joystick.ocultarBotones = true;
      //Gana cell
      this.descansoPjs(false);
      this.gohan.gohanPierdeCombate = true;
      this.cell.cargaCell = true;
      return;
    }
  }

  reintentar() {
    this.resetarAnimaciones();
    this.descansoPjs(true);
    this.cell.vidaCell = 200;
    this.gohan.vidaGohan = 100;
    this.gohan.acumularCargaGohan = 3;
    this.cell.acumularCargaCell = 3;
    this.barraGohan();
    this.barraCEll();
  }
} //final

