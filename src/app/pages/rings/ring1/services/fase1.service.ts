import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Gohan from '../../models/Gohan';
import Cell from '../../models/Cell'
import { Joystick } from '../../shared/components/joystick/Interface/Joystick';

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
  //contardo sirve parar decirle a jugar que sea paciente
  contador: number = 0;
  //contadorGolpeBoton sirve para no abusar de usar el mismo boton
  contadorGolpeBoton: number = 0;
  //choqueKame activar animacion impacto kame
  choqueKame: boolean = false;
  // btnContarChoque valor iniciar de los dos kames
  btnContarChoque: number = 26;
  //ganar o perder
  win: boolean = false;
  lose: boolean = false;
  winGif: boolean = false;

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

  contar() {
    //contador de apretar el mismo boton
    this.contador = this.contador + 1;
    if (this.contador >= 2) {
      this.joystick.texto = "Espera!"
      setTimeout(() => {
        this.joystick.texto = '';
      }, 2000);
    }
  }

  descansoPjs(descanso: boolean) {
    this.gohan.gohanBase = descanso;
    this.cell.baseCell = descanso;
  }

  barraCEll() {
    //vida en la vista
    this.cell.vidaBarraCell = (this.cell.vidaCell * 1) / 200;
  }
  barraGohan() {
    //vida en la vista
    this.gohan.vidaBarraGohan = (this.gohan.vidaGohan * 1) / 100;
  }
  choqueKames() {
    this.btnContarChoque = this.btnContarChoque + 0.3;
    this.cell.poderCell = this.cell.poderCell - 0.3;
    const KameCell = document.getElementById('KameCell');
    const KameGohan = document.getElementById('KameGohan');
    KameGohan!.style.opacity = '1';
    KameCell!.style.opacity = '1';
    KameGohan!.style.left = this.btnContarChoque + 'vw';
    KameCell!.style.width = this.cell.poderCell + '%';

    if (this.btnContarChoque >= 41 && this.cell.vidaCell >= 60) {
      KameGohan!.classList.add('kameWin');
      KameCell!.classList.add('kameCellPierde');
      this.joystick.ocultarBtnPulsar = false;

      setTimeout(() => {
        this.cell.kameContraCell = true;
        this.cell.heridoCell = true;
        this.choqueKame = false;
        this.gohan.ganaGohan = true;
        this.cell.kameContraCell = true;

        this.joystick.texto = 'Gohan sale victorioso';
        this.cell.vidaCell = this.cell.vidaCell - 50;
        this.barraCEll();
      }, 2000);
      setTimeout(() => {
        this.resetarAnimaciones();
      }, 4000);
      return;
    } else if (this.btnContarChoque >= 47 && this.cell.vidaCell < 60) {
      //menos vida mas dificil ganar a cell
      KameGohan!.classList.add('kameWin');
      KameCell!.classList.add('kameCellPierde');
      this.joystick.ocultarBtnPulsar = false;
      this.joystick.texto = 'Gohan sale victorioso';
      setTimeout(() => {
        this.cell.kameContraCell = true;
        this.cell.heridoCell = true;
        this.choqueKame = false;
        this.gohan.ganaGohan = true;
        this.cell.kameContraCell = true;
        this.cell.vidaCell = this.cell.vidaCell - 50;
        this.barraCEll();
      }, 2000);
      window.setTimeout(() => {
        this.resetarAnimaciones();
      }, 4000);
      return;
    }
  }
  accionGolpe(golpe: string) {
    this.contar();
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
    this.contar();
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
    this.contar();
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
    this.contar();
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
          this.choqueKame = true;
          setTimeout(() => {
            const KameGohan = document.getElementById('KameGohan');
            const KameCell = document.getElementById('KameCell');
            KameGohan!.style.opacity = '1';
            KameCell!.style.opacity = '1';
            KameCell!.style.width = 40 + '%';
            this.joystick.ocultarBtnPulsar = true;
          }, 3000);

          setTimeout(() => {
            if (
              (this.btnContarChoque < 41 && this.cell.vidaCell >= 60) ||
              (this.btnContarChoque < 47 && this.cell.vidaCell < 60)
            ) {
              this.joystick.ocultarBtnPulsar = false;
              const KameGohan = document.getElementById('KameGohan');
              const KameCell = document.getElementById('KameCell');
              const gohanPosturaKame = document.getElementById('gohanKame');
              KameGohan!.style.opacity = '0';
              KameCell!.style.width = 64 + '%';
              setTimeout(() => {
                gohanPosturaKame!.style.width = '0vw';
              }, 2000);
              this.joystick.texto = 'Cell sale victorioso';
              this.gohan.heridaGohan = true;
              this.gohan.vidaGohan = this.gohan.vidaGohan - 50;
              this.barraGohan();
              setTimeout(() => {
                this.resetarAnimaciones();
              }, 4000);
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
    this.joystick.ocultarBotones = false;
    this.contador = 0;
    this.joystick.texto = '';
    this.descansoPjs(true);
    this.joystick.ocultarTexto = false;
    this.choqueKame = false;
    this.cell.poderCell = 40;
    this.btnContarChoque = 26;
    this.joystick.ocultarBtnPulsar = false;
    /**Gohan */
    this.gohan.golpeGohan = false;
    this.gohan.rayaGohan = false;
    this.gohan.rayaGohan = false;
    this.gohan.defensaGohan = false;
    this.gohan.contraGohan = false;
    this.gohan.cargaGohan = false;
    this.gohan.kameGohan = false;
    this.gohan.heridaGohan = false;
    this.gohan.cansadoGohan = false;
    this.gohan.heridaKame = false;
    this.gohan.ganaGohan = false;
    /**Cell */
    this.cell.esquivaCell = false;
    this.cell.heridoCell = false;
    this.cell.golpeCell = false;
    this.cell.cargaCell = false;
    this.cell.cansadoCell = false;
    this.cell.destelloCell = false;
    this.cell.kameCell = false;
    this.cell.kameContraCell = false;
    this.cell.contraCell = false;
    //comprobacion ganador
    this.ganador();
  }

  ganador() {
    if (this.cell.vidaBarraCell <= 0) {
      //gana gohan
      this.descansoPjs(false);
      this.win = true;
      setTimeout(() => {
        this.winGif = !this.winGif;
      }, 6500);
    } else if (this.gohan.vidaBarraGohan <= 0) {
      //Gana cell
      this.joystick.ocultarBotones = true;
      this.descansoPjs(false);
      this.lose = true;
      this.cell.cargaCell = true;
      return;
    }
  }

  reintentar() {
    this.lose = !this.lose;
    this.cell.cargaCell = !this.cell.cargaCell;
    this.descansoPjs(true);
    this.cell.vidaCell = 200;
    this.gohan.vidaGohan = 100;
    this.barraGohan();
    this.barraCEll();
    this.gohan.acumularCargaGohan = 3;
    this.cell.acumularCargaCell = 3;
    this.resetarAnimaciones();
  }
} //final

