
import { Injectable } from '@angular/core';

import Gohan from '../../models/Gohan';
import Cell from '../../models/Cell'

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
  contador: number = 0;
  texto: string = '';
  espera: boolean = true;
  win: boolean = false;
  lose: boolean = false;
  winGif: boolean = false;
  contadorGolpeBoton: number = 0;

  choqueKame: boolean = false;
  pulsar: boolean = false;
  btnContarChoque: number = 26;



  ocultarBotones: boolean = false;
  constructor() { }
  contar() {
    //contador de apretar el mismo boton
    this.contador = this.contador + 1;
    if (this.contador >= 2) {
      this.texto = 'Espera!';
      window.setTimeout(() => {
        this.texto = '';
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
  // choqueKames() {
  //   this.btnContarChoque = this.btnContarChoque + 0.3;
  //   this.poderCell = this.poderCell - 0.3;
  //   const KameCell = document.getElementById('KameCell');
  //   const KameGohan = document.getElementById('KameGohan');
  //   KameGohan.style.opacity = '1';
  //   KameCell.style.opacity = '1';
  //   KameGohan.style.left = this.btnContarChoque + 'vw';
  //   KameCell.style.width = this.poderCell + '%';

  //   if (this.btnContarChoque >= 41 && this.vidaCell >= 60) {
  //     KameGohan.classList.add('kameWin');
  //     KameCell.classList.add('kameCellPierde');
  //     this.pulsar = false;

  //     window.setTimeout(() => {
  //       this.kameContraCell = true;
  //       this.heridoCell = true;
  //       this.choqueKame = false;
  //       this.ganaGohan = false;
  //       this.ganaGohan = true;
  //       this.kameContraCell = true;
  //       this.texto = 'Gohan sale victorioso';
  //       this.vidaCell = this.vidaCell - 50;
  //       this.barraCEll();
  //     }, 2000);
  //     window.setTimeout(() => {
  //       this.resetarAnimaciones();
  //     }, 4000);
  //     return;
  //   } else if (this.btnContarChoque >= 47 && this.vidaCell < 60) {
  //     //menos vida mas dificil ganar a cell
  //     KameGohan.classList.add('kameWin');
  //     KameCell.classList.add('kameCellPierde');
  //     this.pulsar = false;
  //     this.texto = 'Gohan sale victorioso';
  //     window.setTimeout(() => {
  //       this.kameContraCell = true;
  //       this.heridoCell = true;
  //       this.choqueKame = false;
  //       this.ganaGohan = false;
  //       this.ganaGohan = true;
  //       this.kameContraCell = true;
  //       this.vidaCell = this.vidaCell - 50;
  //       this.barraCEll();
  //     }, 2000);
  //     window.setTimeout(() => {
  //       this.resetarAnimaciones();
  //     }, 4000);
  //     return;
  //   }
  // }
  accionGolpe(golpe: string) {
    this.contar();
    if (this.espera == false) {
      this.gohan.rayaGohan = true;
      this.descansoPjs(false);
      this.espera = true;
      this.accionCell(golpe);
      setTimeout(() => {
        this.ocultarBotones = true;
      }, 100);
    }
  }
  // accionDefensa(defensa: string) {
  //   this.contar();
  //   if (this.espera == false) {
  //     this.contadorGolpeBoton = this.contadorGolpeBoton - 1;
  //     this.base = false;
  //     this.espera = true;
  //     this.defensaGohan = true;
  //     this.accionCell(defensa);
  //     window.setTimeout(() => {
  //       this.ocultarBotones = true;
  //     }, 100);
  //   }
  // }
  // accionCarga(carga: string) {
  //   this.contar();
  //   if (this.espera == false) {
  //     this.contadorGolpeBoton = this.contadorGolpeBoton - 1;
  //     this.base = false;
  //     this.espera = true;
  //     this.cargaGohan = true;
  //     this.acumularCargaGohan = this.acumularCargaGohan + 1;
  //     if (this.acumularCargaGohan == 4) {
  //       this.acumularCargaGohan = this.acumularCargaGohan - 1;
  //     }
  //     this.accionCell(carga);
  //     window.setTimeout(() => {
  //       this.ocultarBotones = true;
  //     }, 100);
  //   }
  // }
  // accionKi(ki: string) {
  //   this.contar();
  //   if (this.espera == false) {
  //     this.contadorGolpeBoton = this.contadorGolpeBoton - 1;
  //     this.base = false;
  //     this.espera = true;
  //     this.accionCell(ki);
  //     window.setTimeout(() => {
  //       this.ocultarBotones = true;
  //     }, 100);
  //   }
  // }

  // *CEll*************************CEll*********************CEll*** */
  accionCell(_e: string) {
    switch (_e) {
      case 'golpe':
        let aleatorioDefensa = Math.floor(Math.random() * (10 - 0) + 0);

        if (this.contadorGolpeBoton < 0) {
          this.contadorGolpeBoton = 0;
        }
        if (aleatorioDefensa >= 7) {
          //daño directo
          this.cell.vidaCell = this.cell.vidaCell - 10;
          this.barraCEll();
          this.contadorGolpeBoton = this.contadorGolpeBoton + 1;
          this.gohan.rayaGohan = true;
          this.gohan.golpeGohan = true;
          this.descansoPjs(false);
          this.cell.heridoCell = true;
          this.texto = 'Cell recibe daño';
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 2000);
        } else if (aleatorioDefensa >= 4 && aleatorioDefensa <= 6) {
          //esquiva cell
          this.contadorGolpeBoton = this.contadorGolpeBoton + 1;
          this.baseCell = false;
          this.golpeGohan = true;
          this.esquivaCell = true;
          this.texto = 'Cell esquiva el ataque';
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 2000);
        } else if (
          aleatorioDefensa >= 0 &&
          aleatorioDefensa <= 3 &&
          this.contadorGolpeBoton >= 2 &&
          this.acumularCargaCell >= 1
        ) {
          //Taiyoken
          this.contadorGolpeBoton = 0;
          this.destelloCell = true;
          this.acumularCargaCell = this.acumularCargaCell - 1;
          this.texto = 'Cell utiliza Taiyoken!';
          this.vidaGohan = this.vidaGohan - 5;
          this.barraGohan();
          this.acumularCargaGohan = this.acumularCargaGohan - 1;
          if (this.acumularCargaGohan < 0) {
            this.acumularCargaGohan = 0;
          }
          this.barraGohan();
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 2500);
        } else {
          //contra de cell
          this.contadorGolpeBoton = this.contadorGolpeBoton + 1;
          this.baseCell = false;
          this.golpeGohan = true;
          this.esquivaCell = true;
          this.contraCell = true;
          this.texto = 'Cell contraataca!';
          window.setTimeout(() => {
            this.vidaGohan = this.vidaGohan - 10;
            this.barraGohan();
          }, 1000);
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 2000);
        }

        break;
      case 'defensa':
        let aleatorio2 = Math.floor(Math.random() * (10 - 0) + 0);
        if (aleatorio2 >= 9) {
          this.baseCell = true;
          this.texto = 'Cell no hace nada';
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 2000);
        }
        if (aleatorio2 >= 6 && aleatorio2 <= 8) {
          if (aleatorio2 == 7 || aleatorio2 == 8) {
            this.golpeCell = true;
            this.texto = 'Cell ataca';
            this.vidaGohan = this.vidaGohan - 2;
            this.barraGohan();
            window.setTimeout(() => {
              this.resetarAnimaciones();
            }, 2000);
          } else {
            this.golpeCell = true;
            this.contraGohan = true;
            window.setTimeout(() => {
              this.defensaGohan = false;
              this.golpeCell = false;
              this.texto = 'Gohan Contraataca!';
              this.vidaCell = this.vidaCell - 20;
              this.barraCEll();
            }, 2000);
            window.setTimeout(() => {
              this.resetarAnimaciones();
            }, 4000);
          }
        }

        if (aleatorio2 >= 2 && aleatorio2 <= 5) {
          if (this.acumularCargaCell == 3) {
            this.kameCell = true;
            this.acumularCargaCell = 0;
            this.texto = 'Cell utiliza Kamehameha';
            window.setTimeout(() => {
              this.vidaGohan = this.vidaGohan - 12;
              this.barraGohan();
            }, 2000);
            window.setTimeout(() => {
              this.resetarAnimaciones();
            }, 6000);
          } else {
            this.cargaCell = true;
            this.acumularCargaCell = this.acumularCargaCell + 1;
            window.setTimeout(() => {
              this.resetarAnimaciones();
            }, 2100);
          }
        }
        if (aleatorio2 >= 0 && aleatorio2 <= 1) {
          if (this.acumularCargaCell == 0) {
            this.cansadoCell = true;
            this.texto = 'Cell parece cansado';
            window.setTimeout(() => {
              this.resetarAnimaciones();
            }, 2100);
          } else if (this.acumularCargaCell == 1) {
            this.cargaCell = true;
            window.setTimeout(() => {
              this.acumularCargaCell = this.acumularCargaCell + 1;
              this.resetarAnimaciones();
            }, 2100);
          } else if (this.acumularCargaCell == 2) {
            this.cargaCell = true;
            window.setTimeout(() => {
              this.acumularCargaCell = this.acumularCargaCell + 1;
              this.resetarAnimaciones();
            }, 2100);
          } else if (this.acumularCargaCell == 3) {
            this.kameCell = true;
            window.setTimeout(() => {
              this.texto = 'Cell utiliza kamehameha';
              this.vidaGohan = this.vidaGohan - 12;
              this.barraGohan();
            }, 2000);
            window.setTimeout(() => {
              this.resetarAnimaciones();
            }, 6000);
            this.acumularCargaCell = 0;
          }
        }

        break;
      case 'carga':
        if (this.acumularCargaCell <= 2) {
          this.cargaCell = true;
          this.acumularCargaCell = this.acumularCargaCell + 1;
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 2100);
        } else {
          //Cell utiliza kame
          this.kameCell = true;
          this.heridaGohan = true;
          this.acumularCargaCell = 0;
          this.texto = 'Gohan recibe un duro ataque!';
          window.setTimeout(() => {
            this.vidaGohan = this.vidaGohan - 24;
            this.barraGohan();
          }, 2000);
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 5900);
        }
        break;
      case 'ki':
        if (this.acumularCargaGohan == 3 && this.acumularCargaCell == 3) {
          this.choqueKame = true;
          window.setTimeout(() => {
            const KameGohan = document.getElementById('KameGohan');
            const KameCell = document.getElementById('KameCell');
            KameGohan.style.opacity = '1';
            KameCell.style.opacity = '1';
            KameCell.style.width = 40 + '%';
            this.pulsar = true;
          }, 3000);

          window.setTimeout(() => {
            if (
              (this.btnContarChoque < 41 && this.vidaCell >= 60) ||
              (this.btnContarChoque < 47 && this.vidaCell < 60)
            ) {
              this.pulsar = false;
              const KameGohan = document.getElementById('KameGohan');
              const KameCell = document.getElementById('KameCell');
              const gohanPosturaKame = document.getElementById('gohanKame');
              KameGohan.style.opacity = '0';
              KameCell.style.width = 64 + '%';
              window.setTimeout(() => {
                gohanPosturaKame.style.width = '0vw';
              }, 2000);
              this.texto = 'Cell sale victorioso';
              this.heridaGohan = true;
              this.vidaGohan = this.vidaGohan - 50;
              this.barraGohan();
              window.setTimeout(() => {
                this.resetarAnimaciones();
              }, 4000);
            }
          }, 13200);
          this.acumularCargaCell = 0;
          this.acumularCargaGohan = 0;
          break;
        } else if (this.acumularCargaGohan == 3) {
          this.baseCell = true;
          this.kameGohan = true;
          this.acumularCargaGohan = 0;
          window.setTimeout(() => {
            this.baseCell = false;
            this.heridoCell = true;
            this.kameContraCell = true;
            this.texto = 'Cell recibe daño';
            this.vidaCell = this.vidaCell - 30;
            this.barraCEll();
          }, 4100);
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 6000);
          break;
        } else if (this.acumularCargaCell == 3) {
          this.kameCell = true;
          this.texto = 'Gohan parece cansado';
          this.cansadoGohan = true;
          this.acumularCargaCell = 0;
          this.heridaGohan = true;
          window.setTimeout(() => {
            this.texto = 'Gohan recibe un duro ataque!';
            this.cansadoGohan = false;
            this.vidaGohan = this.vidaGohan - 30;
            this.barraGohan();
          }, 2000);
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 5500);
          break;
        } else {
          this.texto = 'Gohan parece cansado';
          this.cansadoGohan = true;
          this.cargaCell = true;
          this.acumularCargaCell = this.acumularCargaCell + 1;
          window.setTimeout(() => {
            this.resetarAnimaciones();
          }, 2100);
          break;
        }
      default:
    }
  }

  resetarAnimaciones() {
    this.ocultarBotones = false;
    this.contador = 0;
    this.texto = '';
    this.descansoPjs(true);
    this.espera = false;
    this.choqueKame = false;
    this.cell.poderCell = 40;
    this.btnContarChoque = 26;
    this.pulsar = false;
    /**Gohan */
    this.gohan.gohanBase = false;
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
    this.ganaGohan = false;
    /**Cell */
    this.baseCell = false;
    this.esquivaCell = false;
    this.heridoCell = false;
    this.golpeCell = false;
    this.cargaCell = false;
    this.cansadoCell = false;
    this.destelloCell = false;
    this.kameCell = false;
    this.kameContraCell = false;
    this.contraCell = false; //puño
    // this.defensaCell no tiene
    this.fase2();
  }



  // fase2() {
  //   if (this.vidaBarraCell <= 0) {
  //     //gana gohan
  //     this.base = false;
  //     this.gohanBase = true;
  //     this.win = true;
  //     window.setTimeout(() => {
  //       this.winGif = !this.winGif;
  //     }, 6500);
  //   } else if (this.vidaBarraGohan <= 0) {
  //     //Gana cell
  //     this.ocultarBotones = true;
  //     this.base = false;
  //     this.lose = true;
  //     this.cargaCell = true;
  //     this.espera = true;
  //     return;
  //   }
  // }
  // reintentar() {
  //   this.lose = !this.lose;
  //   this.cargaCell = !this.cargaCell;
  //   this.base = true;
  //   this.vidaCell = 200;
  //   this.vidaGohan = 100;
  //   this.barraGohan();
  //   this.barraCEll();
  //   this.acumularCargaGohan = 3;
  //   this.acumularCargaCell = 3;
  //   this.resetarAnimaciones();
  // }
} //final

