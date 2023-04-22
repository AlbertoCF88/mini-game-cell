import { Injectable } from '@angular/core';

import { Joystick } from '../../shared/components/joystick/Interface/Joystick';
import { BehaviorSubject } from 'rxjs';
import GohanF2 from '../../models/extendedmodels/GohanF2';
import CellF2 from '../../models/extendedmodels/CellF2';


@Injectable({
  providedIn: 'root'
})
export class Fase2Service {

  gohan : GohanF2 = new GohanF2(100, 1, 3, 0);
  cell: CellF2 = new CellF2(100, 1, 3, 0);

  //Condiciones fase2

  //contadorGolpeBoton sirve para contar las veces que le das a cada btn que sale en pantalla
  contadorGolpeBoton: number = 0;
  //botones que se activan
  btn1: boolean = false; //cadena de golpes
  btn2: boolean = false; //cadena de golpes
  btn3: boolean = false; //cadena de golpes
  btn4: boolean = false; //cadena de golpes
  btn5: boolean = false; //cadena de golpes

  //activar img bola gigante
  unionbola: boolean = false;
  //fallos hace que la bola final sea mas rapida o mas lenta segun los fallos de las pulsaciones de los botones
  fallos: number = 400;
  //activar imagen explosion
  explosion:boolean=false;
  constructor() {
    this.descansoPjs(true);
    this.cadena1();
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
        this.btn1 = true;
        setTimeout(() => {
          this.btncontador();
          this.btn1 = false;
          if (this.contadorGolpeBoton >= 10) {
            //ganas
            this.contadorGolpeBoton = 0;
            this.cell.patadaCell = false;
            this.cell.heridoCell1 = true;
            this.cell.vidaCell = this.cell.vidaCell - 15;
            this.barraCEll();
            setTimeout(() => {
            this.resetarAnimaciones() 
             // this.funCadena2();
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




  resetarAnimaciones() {
    this.descansoPjs(false)
    /**Gohan */
    this.gohan.rayaGohan=false;
    this.gohan.golpeGohan1=false;
    this.gohan.golpeGohan2=false;
    this.gohan.heridaGohan1=false;
    this.gohan.heridaGohan2=false;
    this.gohan.heridaGohan3=false;
    this.gohan.heridaGohan4=false;
    /**Cell */
    this.cell.rayaCell=false;
    this.cell.patadaCell=false;
    this.cell.punioCell=false;
    this.cell.golpeIzCell=false;
    this.cell.golpeDeCell=false;
    this.cell.heridoCell1=false;
    this.cell.heridoCell2=false;
    this.cell.heridoCell3=false;
    this.cell.heridoCell4=false;
  }
}
