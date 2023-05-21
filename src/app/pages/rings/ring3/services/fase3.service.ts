import { Injectable } from '@angular/core';
import GohanF3 from '../../models/extendedmodels/GohanF3';
import CellF3 from '../../models/extendedmodels/CellF3';
import { Joystick } from '../../shared/components/joystick/Interface/Joystick';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageGuard } from '../../models/localStorageInterface';

@Injectable({
  providedIn: 'root'
})
export class Fase3Service {

  public gohan: GohanF3 = new GohanF3(100, 1, 5, 5);
  public cell: CellF3 = new CellF3(100, 1, 6, 6);

  public joystick: Joystick;

  //_btnActivar para activar btn contra
  private _btnActivar = new BehaviorSubject<boolean>(false);
  btnActivar$ = this._btnActivar.asObservable();
  //numero del estilo a plicar al boton para mostras en pantalla desde joystick component
  private _btnStyle = new BehaviorSubject<number>(0);
  btnStyle$ = this._btnStyle.asObservable();

  //contardor btn contra
  private contadorBtnContra: number = 0

  //turno, cell ataca cada 2 turnos
  private turno: number = 0;
  //caundo este se active podras derrotar a cell(1 kame)
  public activarDerrotarCell: boolean = false;

  //activar cambios de estilos kame 
  private _activarCellKame = new BehaviorSubject<boolean>(false);
  activarCellKame$ = this._activarCellKame.asObservable();

  //activar cambios de estilos kame 
  private _activarGohanKame = new BehaviorSubject<boolean>(false);
  activarGohanKame$ = this._activarGohanKame.asObservable();

  //activar combate final 
  private _activarCellKameFinal = new BehaviorSubject<boolean>(false);
  activarCellKameFinal$ = this._activarCellKameFinal.asObservable();

  //activar combate final
  private _activarGohanKameFinal = new BehaviorSubject<boolean>(false);
  activarGohanKameFinal$ = this._activarGohanKameFinal.asObservable();

  private activarBtnKameFinal: boolean = false;

  localStorageGuard: LocalStorageGuard;
  
  constructor() {
    this.localStorageGuard = {
      fase1: true,
      fase2: true,
      fase3: false,
    }

    this.joystick = {
      ocultarBotones: false,
      ocultarBtnPulsar: false,
      ocultarTexto: false,
      texto: '',
    }

    this.descansoPjs(true);
  }

  public cambiarValorActivarCellKame(nuevoValor: boolean): void {
    this._activarCellKame.next(nuevoValor);
  }

  public cambiarValorActivarGohanKame(nuevoValor: boolean): void {
    this._activarGohanKame.next(nuevoValor);
  }

  public cambiarValorActivarCellKameFinal(nuevoValor: boolean): void {
    this._activarCellKameFinal.next(nuevoValor);
  }

  public cambiarValorActivarGohanKameFinal(nuevoValor: boolean): void {
    this._activarGohanKameFinal.next(nuevoValor);
  }
  private descansoPjs(descanso: boolean) {
    this.gohan.base = descanso;
    this.cell.base = descanso;
  }

  public barraCEll() {
    //vida en la vista
    this.cell.vidaBarraCell = (this.cell.vidaCell * 1) / 100;
  }

  public barraGohan() {
    //vida en la vista
    this.gohan.vidaBarraGohan = (this.gohan.vidaGohan * 1) / 100;
  }

  private punioOpatada() {
    const randomNumber = Math.round(Math.random());//0 o 1
    //es solo visual para ver puño cell o patada
    switch (randomNumber) {
      case 0:
        this.cell.punio = true;
        break;
      case 1:
        this.cell.patada = true;
        break;
      default:
        break;
    }
  }

  private turnoCell(btn: string): boolean {
    this.turno++;
    if (this.turno === 3 && btn != 'defensa') {
      this.turno = 0
      this.cell.raya = true;
      this.descansoPjs(false);
      this.punioOpatada();
      this.gohan.herida = true;
      this.joystick.texto = 'Cell ataca!';
      this.gohan.vidaGohan = this.gohan.vidaGohan - 10;
      this.barraGohan();
      setTimeout(() => {
        this.resetarAnimaciones();
      }, 2100);

      return true;
    } else {
      if (this.turno === 3 && btn == 'defensa') {
        this.turno = 0
        this.cell.raya = true;
        this.descansoPjs(false);
        this.gohan.defensa = true;
        this.punioOpatada();
        this.joystick.texto = 'Cell ataca!';
        this.gohan.vidaGohan = this.gohan.vidaGohan - 0;
        this.barraGohan();
        setTimeout(() => {
          this.resetarAnimaciones();
        }, 2100);
        return true;
      }
    }
    return false
  }

  //*****acciones botones*************************

  public accionGolpe(golpe: string) {
    if (this.joystick.ocultarTexto == false) {
      setTimeout(() => {
        this.joystick.ocultarBotones = true;
      }, 100);
      const turno = this.turnoCell(golpe);
      if (turno) {
        //turno de cell
        return;
      }
      this.gohan.raya = true;
      this.descansoPjs(false);
      this.joystick.ocultarTexto = true;
      this.accionCell(golpe);
    }
  }

  public accionDefensa(defensa: string) {
    if (this.joystick.ocultarTexto == false) {
      setTimeout(() => {
        this.joystick.ocultarBotones = true;
        setTimeout(() => {
          this.resetarAnimaciones();
         }, 2000);
     
      }, 100);
      const turno = this.turnoCell(defensa);
      if (turno) {
        //turno de cell
        return;
      }
      this.gohan.base = false;
      this.joystick.ocultarTexto = true;
      this.gohan.defensa = true;
      this.joystick.texto = 'Cell no hace nada';
    }
  }

  public accionCarga(carga: string) {
    if (this.joystick.ocultarTexto == false) {
      setTimeout(() => {
        this.joystick.ocultarBotones = true;
      }, 100);
      const turno = this.turnoCell(carga);
      if (turno) {
        //turno de cell
        return;
      }
      this.descansoPjs(false);
      this.joystick.ocultarTexto = true;
      this.accionCell(carga);
    }
  }

  public accionKi(ki: string) {
    if (this.joystick.ocultarTexto == false) {
      setTimeout(() => {
        this.joystick.ocultarBotones = true;
      }, 100);
      const turno = this.turnoCell(ki);
      if (turno) {
        //turno de cell
        return;
      }
      this.joystick.ocultarTexto = true;
      this.accionCell(ki);
    }
  }

  // *CEll*************************CEll*********************CEll*** */
  private accionCell(accion: string) {
    switch (accion) {
      case 'golpe':
        let random = Math.floor(Math.random() * (5 - 1) + 1); //minimo 1 y maximo 4 (excluye el 6)
        switch (random) {
          case 1:
            this.dañoDirecto();
            break;
          case 2:
            this.cellDefiende();
            break;
          case 3:
            this.cellEsquiva();
            break;
          case 4:
            this.esquivaCadena();
            break;
          default:
            this.dañoDirecto();
            break;
        }
        break;
      case 'defensa':
        //no hace nada
        //solo sive para boloquear el turno de cell cada 3 turnos
        break;
      case 'carga':
        //si tu cargas cell tambien si lo necesita
        //carga maxima 6
        this.cellCargaki();
        break;
      case 'ki':
        console.log("case ki")
        if (this.gohan.acumularCargaGohan === 2) {
          console.log("rafaga")
          this.rafaga();
          return;
        }
        //condicion para ganar a cell
        if (this.gohan.acumularCargaGohan === 5 &&
          this.activarDerrotarCell === true &&
          this.cell.vidaCell <= 50) {
          console.log("kame 5")
          setTimeout(() => {
            this.kamePadreHijo();
            return;
          }, 1000);
        } else if (this.gohan.acumularCargaGohan >= 3) {
          console.log("kame 3")
          this.kame();
          return;
        }
        break;
      default:

        break;
    }

  }

  /**************************cel responde al golpe ************************************  cel responde al PUÑO***************************************************  cel responde al PUÑO******************cel responde al PUÑO ************************************ **cel responde al PUÑO ************************************ */
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
          this.cell.contra = false;
          //contraataque2
          this.contraataque2();
        } else {
          this.gohan.gancho = false
          this.gohan.heridaContra1 = true;
          this.gohan.vidaGohan = this.gohan.vidaGohan - 20;
          this.barraGohan();
          this.joystick.texto = 'cell sale victorioso';
          setTimeout(() => {
            this.resetarAnimaciones();
          }, 2100);
        }
      }, 1000);

    }, 2000);
  }

  private contraataque2() {
    this.contadorBtnContra = 0;
    let randomNumber = Math.round(Math.random());//0 o 1
    if (randomNumber === 1) {
      this.gohan.patada1 = false;
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
            this.cell.contra1 = false;
            this.gohan.patada1 = false;
            this.gohan.rayaContra1 = true;
            this.gohan.patada2 = true;
            this.cell.heridaContra2 = true;
            this.cell.contra = false;
            this.cell.vidaCell = this.cell.vidaCell - 30;
            this.barraCEll();
            this.joystick.texto = 'Gohan sale victorioso';
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 2100);
          } else {
            this.gohan.patada1 = false
            this.gohan.heridaContra2 = true;
            this.gohan.vidaGohan = this.gohan.vidaGohan - 50;
            this.barraGohan();
            this.joystick.texto = 'cell sale victorioso';
            setTimeout(() => {
              this.resetarAnimaciones();
            }, 2100);
          }
        }, 1000);
      }, 1000);
    } else {
      this.cell.heridaContra1 = true;
      this.cell.vidaCell = this.cell.vidaCell - 40;
      this.barraCEll();
      this.joystick.texto = 'Gohan sale victorioso';
      setTimeout(() => {
        this.resetarAnimaciones();
      }, 2100);
    }
  }
  //***********************cell responde cargar ki************** */
  private cellCargaki() {
    if (this.gohan.acumularCargaGohan < 5 && this.cell.acumularCargaCell >= 6) {
      this.gohan.carga = true;
      this.cell.base = false;
      this.cell.kame = true;
      this.cell.acumularCargaCell = this.cell.acumularCargaCell - 3
      this.joystick.texto = 'Gohan recibe un duro ataque!';
      setTimeout(() => {
        this.joystick.texto = '';
        this.gohan.vidaGohan = this.gohan.vidaGohan - 100;
        this.barraGohan();
        this.gohan.carga = false;
        this.gohan.herida = true;
        this.gohan.pierde = true;
      }, 3500);
    } else {
      this.gohan.carga = true;
      this.gohan.acumularCargaGohan++;
      this.cell.carga = true;
      this.cell.acumularCargaCell++;
      this.joystick.texto = 'Los dos luchadores recuperan energia';
      setTimeout(() => {
        this.resetarAnimaciones();
      }, 2100);
    }
  }


  //******************************************************* */

  ///habilidades KI//////////////////////////////////////////////////
  private rafaga() {
    this.gohan.acumularCargaGohan = this.gohan.acumularCargaGohan - 2;
    this.gohan.base = false;
    this.gohan.rafaga = true;
    setTimeout(() => {
      this.joystick.texto = 'Cell desvia el ataque!';
      this.cell.base = false;
      this.cell.desvioKi = true;
      setTimeout(() => {
        this.gohan.rafaga = false;
        this.gohan.base = true;
      }, 1000);
      setTimeout(() => {
        this.resetarAnimaciones();
      }, 2500);
    }, 1000);
  }

  private kame() {
    this.descansoPjs(false);
    this.gohan.acumularCargaGohan = this.gohan.acumularCargaGohan - 3;
    this.cell.acumularCargaCell = this.cell.acumularCargaCell - 3;
    this.gohan.kame = true;
    this.cell.kame = true;
    setTimeout(() => {
      this._activarCellKame.next(true)
      this.joystick.ocultarBtnPulsar = true;
    }, 2000);
  }

  public choqueKames() {
    //cada vez que es pulsado este btn mueve kame gohan
    if (this.activarBtnKameFinal == true) {
      this._activarGohanKameFinal.next(true)
    } else {
      this._activarGohanKame.next(true)
    }
  }

  public primeraFaseActivada() {
    this.gohan.activarVideo = true;
    this.activarDerrotarCell = true;
    setTimeout(() => {
      this.resetarAnimaciones();
      this.joystick.ocultarBotones = true;
      this.joystick.texto = '¿Gohan ha ganado al fin?'
      this.cell.base = false;
      this.cell.muerto = true;
      setTimeout(() => {
        this.cell.muerto = false;
        this.cell.base = true;
        this.joystick.texto = '¡¡Cell se regenera!!'
        this.cell.vidaCell = 100;
        this.barraCEll();
        setTimeout(() => {
          this.resetarAnimaciones();
        }, 3000);
      }, 4000);
    },4500);
  }

  private kamePadreHijo() {
    this.descansoPjs(false);
    this.gohan.acumularCargaGohan = this.gohan.acumularCargaGohan - 3;
    this.cell.acumularCargaCell = this.cell.acumularCargaCell - 3;
    this.gohan.kame = true;
    this.cell.kame = true;
    setTimeout(() => {
      this.activarBtnKameFinal = true;
      this._activarCellKameFinal.next(true)
      this.joystick.ocultarBtnPulsar = true;
    }, 2000);
  }
  ////////////////////////////////////////
  private resetarAnimaciones() {
    this.joystick.ocultarBotones = false;
    this.joystick.ocultarBtnPulsar = false;
    this.joystick.ocultarTexto = false;
    this.joystick.texto = '';
    this.contadorBtnContra = 0;
    this._btnActivar.next(false);
    this._btnStyle.next(0);

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
    this.gohan.activarVideo = false;
    this.gohan.pierde = false;

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
    this.cellRegeneracion();
  }

  private cellRegeneracion() {
    if (this.gohan.videoFinal === false &&
      this.cell.vidaCell <= 0) {
      this.joystick.texto = '¡¡Cell se regenera!!';
      this.joystick.ocultarBotones = true;
      setTimeout(() => {
        this.cell.vidaCell = 100
        this.barraCEll();
        this.resetarAnimaciones();
      }, 2000);
    }
  }
  private resetearFase() {
    this.activarBtnKameFinal = false;
    this.activarDerrotarCell = false;
    this.contadorBtnContra = 0;
    this.gohan.vidaGohan = 100;
    this.cell.vidaCell = 100;
    this.gohan.acumularCargaGohan = 5;
    this.cell.acumularCargaCell = 6;
    this.gohan.maximaEnergiaGohan = 5;
    this.cell.maximaEnergiaCell = 6;
    this.barraGohan();
    this.barraCEll();
  }
  public reintentar() {
    this.resetarAnimaciones();
    this.resetearFase()
  }

  
  public localStorage() {
    this.localStorageGuard.fase3 = true;
    localStorage.setItem("localStorageGuard", JSON.stringify(this.localStorageGuard));
  }

}

