import { Injectable } from '@angular/core';
import GohanF3 from '../../models/extendedmodels/GohanF3';
import CellF3 from '../../models/extendedmodels/CellF3';
import { Joystick } from '../../shared/components/joystick/Interface/Joystick';

@Injectable({
  providedIn: 'root'
})
export class Fase3Service {

  gohan: GohanF3 = new GohanF3(200, 1, 6, 6);
  cell: CellF3 = new CellF3(200, 1, 6, 6);

  joystick: Joystick;

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
        let random = Math.floor(Math.random() * (6 - 1) + 1); //minimo 1 y maximo 5 (excluye el 6)
         random = 5
        if (random == 5) {
          //daño directo
          this.dañoDirecto();
        } else if (random === 4) {
          //defensa
         // this.cellDefiende();
        } else if (random === 3) {
          //cell esquiva
        //  this.cellEsquiva();
        } else if (random === 2) {
          // esquiva con cadena de golpes
         // this.esquivaCadena();
        } else if (random === 1) {
          //tecnica Ki barrera
        //  this.cellKiBarrera();
        } else {
//this.dañoDirecto();
        }
        break;

    }

  }

  /**************************cel responde al PUÑO ************************************  cel responde al PUÑO***************************************************  cel responde al PUÑO******************cel responde al PUÑO ************************************ **cel responde al PUÑO ************************************ */
  dañoDirecto() {
    this.gohan.base = false;
    this.gohan.raya = true;
    this.gohan.gancho = true;
    setTimeout(() => {
      this.cell.base = false;
      this.cell.herida = true;
      this.joystick.texto = 'Cell recibe daño';
      this.cell.vidaCell = this.cell.vidaCell - 10;
      this.barraCEll();
      setTimeout(() => {
        this.resetarAnimaciones();
      }, 2100);
    }, 1000);

  }

  resetarAnimaciones() {
    this.gohan.base=false;
    this.gohan.raya=false;
    this.gohan.carga=false;
    this.gohan.defensa=false;
    this.gohan.gancho=false;
    this.gohan.patada=false;
    this.gohan.rafaga=false;
    this.gohan.cargaKame=false;
    this.gohan.kame=false;
    this.gohan.kamePadreHijo=false;
    this.gohan.herida=false;

    this.cell.base=false;
    this.cell.raya=false;
    this.cell.carga=false;
    this.cell.defensa=false;
    this.cell.desvioKi=false;
    this.cell.muerto=false;
    this.cell.herida=false;
    this.cell.punio=false;
    this.cell.patada=false;
    this.cell.contra=false;
    this.cell.atacaCellJunior=false;
    this.cell.cellJunior=false;
    this.cell.kame=false;
  } 

}

