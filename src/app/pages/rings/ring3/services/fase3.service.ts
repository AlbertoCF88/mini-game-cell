import { Injectable } from '@angular/core';
import GohanF3 from '../../models/extendedmodels/GohanF3';
import CellF3 from '../../models/extendedmodels/CellF3';
import { Joystick } from '../../shared/components/joystick/Interface/Joystick';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fase3Service {

  gohan: GohanF3 = new GohanF3(200, 1, 6, 6);
  cell: CellF3 = new CellF3(200, 1, 6, 6);

  joystick: Joystick;

  //_btnActivar para activar btn contra
  private _btnActivar = new BehaviorSubject<boolean>(false);
  btnActivar$ = this._btnActivar.asObservable();
  //numero del estilo a plicar al boton para mostras en pantalla desde joystick component
  private _btnStyle = new BehaviorSubject<number>(0);
  btnStyle$ = this._btnStyle.asObservable();

  //contardor btn contra
  private contadorBtnContra: number = 0

  constructor() {
    this.joystick = {
      ocultarBotones: false,
      ocultarBtnPulsar: false,
      ocultarTexto: false,
      texto: '',
    }

    this.descansoPjs(true);
  }

  descansoPjs(descanso: boolean) {
    this.gohan.base = descanso;
    this.cell.base = descanso;
  }

  barraCEll() {
    //vida en la vista
    this.cell.vidaBarraCell = (this.cell.vidaCell * 1) / 200;
  }

  barraGohan() {
    //vida en la vista
    this.gohan.vidaBarraGohan = (this.gohan.vidaGohan * 1) / 100;
  }

  //acciones botones
  accionGolpe(golpe: string) {
    if (this.joystick.ocultarTexto == false) {
      this.gohan.raya = true;
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
      this.descansoPjs(false);
      this.joystick.ocultarTexto = true;
      this.gohan.defensa = true;
      this.accionCell(defensa);
      setTimeout(() => {
        this.joystick.ocultarBotones = true;
      }, 100);
    }
  }

  accionCarga(carga: string) {
    if (this.joystick.ocultarTexto == false) {
      this.descansoPjs(false);
      this.joystick.ocultarTexto = true;
      this.gohan.carga = true;
      this.gohan.acumularCargaGohan = this.gohan.acumularCargaGohan + 1;
      if (this.gohan.acumularCargaGohan == 7) {
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

    switch (accion) {
      case 'golpe':
        let random = Math.floor(Math.random() * (5 - 1) + 1); //minimo 1 y maximo 4 (excluye el 6)
        random = 4
        switch (random) {
          case 1:
            //daño directo
            this.dañoDirecto();
            break;
          case 2:
            //defensa
            this.cellDefiende();
            break;
          case 3:
            //cell esquiva
            this.cellEsquiva();
            break;
          case 4:
            // esquiva con cadena de golpes
            this.esquivaCadena();
            break;
          default:
            this.dañoDirecto();
            break;
        }
        break;
      default:

        break;
    }

  }

  /**************************cel responde al PUÑO ************************************  cel responde al PUÑO***************************************************  cel responde al PUÑO******************cel responde al PUÑO ************************************ **cel responde al PUÑO ************************************ */
  private dañoDirecto() {
    this.gohan.raya = true;
    this.gohan.gancho = true;
    this.cell.herida = true;
    this.cell.vidaCell = this.cell.vidaCell - 10;
    this.barraCEll();
    this.joystick.texto = 'Cell recibe daño';
    setTimeout(() => {
      this.resetarAnimaciones();
    }, 2100);
  }

  private cellDefiende() {
    this.gohan.raya = true;
    this.gohan.gancho = true;
    this.cell.defensa = true;
    this.cell.vidaCell = this.cell.vidaCell - 3;
    this.barraCEll();
    this.joystick.texto = 'Cell bloquea el ataque';
    setTimeout(() => {
      this.resetarAnimaciones();
    }, 2100);

  }

  private cellEsquiva() {
    this.gohan.raya = true;
    this.gohan.gancho = true;
    this.cell.raya = true;
    this.joystick.texto = 'Cell esquiva el ataque';
    this._btnActivar.next(true);
    this._btnStyle.next(1);
    setTimeout(() => {
      this.resetarAnimaciones();
    }, 2100);
  }

  private esquivaCadena() {
    this.gohan.raya = true;
    this.gohan.gancho = true;
    this.cell.raya = true;
    this.joystick.texto = 'Cell esquiva el ataque';
    setTimeout(() => {
      //contra1
      this.joystick.texto = 'Cell contraataca';
      this._btnActivar.next(true);
      this._btnStyle.next(1);
      this.cell.contra = true;
      //tienes 1s para aprentar el btn
      setTimeout(() => {
        this._btnActivar.next(false);
        this._btnStyle.next(0);
        if (this.contadorBtnContra >= 1) {
          this.gohan.gancho = false;
          this.gohan.rayaContra1 = true;
          this.gohan.patada1 = true;
          this.cell.heridaContra1 = true;
          this.cell.contra = false;
          this.cell.vidaCell = this.cell.vidaCell - 20;
          this.barraCEll();
          //contraataque2
          this.contraataque2();
        } else {
          this.gohan.gancho = false
          this.gohan.heridaContra1 = true;
          this.gohan.vidaGohan = this.gohan.vidaGohan - 20;
          this.barraGohan();
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 2100);
        }
      }, 1000);

    }, 2000);
  }

  private contraataque2() {
    let randomNumber = Math.round(Math.random());//0 o 1
    randomNumber = 1
    if (randomNumber) {
      this.gohan.gancho = false;
      this.gohan.rayaContra1 = true;
      this.gohan.patada1 = true;
      setTimeout(() => {
        this.cell.rayaContra = true;
        this.cell.contra1 = true;
        this.joystick.texto = 'Cell contraataca';
        this._btnActivar.next(true);
        this._btnStyle.next(2);
        this.cell.contra1 = true;
        setTimeout(() => {
          this._btnActivar.next(false);
          this._btnStyle.next(0);
          if (this.contadorBtnContra >= 1) {
            this.gohan.patada1 = false;
            this.gohan.rayaContra2 = true;
            this.gohan.patada2 = true;
            this.cell.heridaContra2 = true;
            this.cell.contra = false;
            this.cell.vidaCell = this.cell.vidaCell - 30;
            this.barraCEll();
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 2100);
          } else {
            this.gohan.patada1 = false
            this.gohan.heridaContra2 = true;
            this.gohan.vidaGohan = this.gohan.vidaGohan - 20;
            this.barraGohan();
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 2100);
          }
        }, 1000);
      }, 1000);
    } else {
      setTimeout(() => {
        this.resetarAnimaciones();
      }, 2100);
    }
  }

  //******************************************************* */
  resetarAnimaciones() {
    this.joystick.ocultarBtnPulsar = false;
    this.joystick.ocultarTexto = false;
    this.joystick.texto = '';
    this.joystick.ocultarBotones = false;
    this.cell.poderCell = 40;
    this.contadorBtnContra = 0;
    this.descansoPjs(true);

    this.gohan.raya = false;
    this.gohan.rayaContra1 = false;
    this.gohan.carga = false;
    this.gohan.defensa = false;
    this.gohan.gancho = false;
    this.gohan.patada1 = false;
    this.gohan.patada2 = false;
    this.gohan.rafaga = false;
    this.gohan.cargaKame = false;
    this.gohan.kame = false;
    this.gohan.kamePadreHijo = false;
    this.gohan.herida = false;
    this.gohan.heridaContra1 = false;
    this.gohan.heridaContra2 = false;

    this.cell.raya = false;
    this.cell.rayaContra = false;
    this.cell.carga = false;
    this.cell.defensa = false;
    this.cell.desvioKi = false;
    this.cell.muerto = false;
    this.cell.herida = false;
    this.cell.heridaContra1 = false;
    this.cell.heridaContra2 = false;
    this.cell.punio = false;
    this.cell.patada = false;
    this.cell.contra = false;
    this.cell.contra1 = false;
    this.cell.atacaCellJunior = false;
    this.cell.cellJunior = false;
    this.cell.kame = false;
  }

}

