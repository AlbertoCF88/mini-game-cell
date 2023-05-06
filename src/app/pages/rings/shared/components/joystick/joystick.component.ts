import { Fase1Service } from '../../../ring1/services/fase1.service';
import { Fase2Service } from '../../../ring2/services/fase2.service';
import { Fase3Service } from '../../../ring3/services/fase3.service';
import { Joystick } from './Interface/Joystick';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss'],
})
export class JoystickComponent implements OnInit {

  @Input() servicio!: any;//cualquier servicio pasado por padre

  joy!: Joystick;
  btnFase2Activar!: boolean;
  btnFase3Activar!: boolean;
  btnStyle!: number;//compartido btnF2 y btnF3

  constructor() { }

  ngOnInit() {
    this.comprobarTipo()
    this.joy = this.servicio.joystick;
    this.activarBotonFase2()
    this.btnStyle = this.servicio.btnStyle;
    this.activarBotonFase3()
  }

  comprobarTipo() {
    // servicios
    if (this.servicio instanceof Fase1Service) {
      this.servicio as Fase1Service;
    }
    if (this.servicio instanceof Fase2Service) {
      this.servicio as Fase2Service;
    }
    if (this.servicio instanceof Fase3Service) {
      this.servicio as Fase3Service;
    }
    if (!(this.servicio instanceof Fase1Service) && !(this.servicio instanceof Fase2Service) && !(this.servicio instanceof Fase3Service)) {
      throw new Error('no es una instancia valida de servicio');
    }
  }

  activarBotonFase2() {
    if (this.servicio instanceof Fase2Service) {
      this.servicio.btnActivar$.subscribe({
        next: (valor: boolean) => {
          this.btnFase2Activar = valor;
        }
      });
      this.servicio.btnStyle$.subscribe({
        next: (numero: number) => {
          this.btnStyle = numero;
        }
      });
    }
  }

  activarBotonFase3() {
    if (this.servicio instanceof Fase3Service) {
      this.servicio.btnActivar$.subscribe({
        next: (valor: boolean) => {
          this.btnFase3Activar = valor;
        }
      });
      this.servicio.btnStyle$.subscribe({
        next: (numero: number) => {
          this.btnStyle = numero;
        }
      });
    }
  }

  choqueKames() {
    this.servicio.choqueKames();
  }

  accionGolpe(accion: string) {
    this.servicio.accionGolpe(accion);
  }

  accionDefensa(accion: string) {
    this.servicio.accionDefensa(accion);
  }

  accionCarga(accion: string) {
    this.servicio.accionCarga(accion);
  }

  accionKi(accion: string) {
    this.servicio.accionKi(accion);
  }

  btnContadorFase2() {
    this.servicio.contadorGolpeBoton++;
  }

  btnContadorFase3() {
    this.servicio.contadorBtnContra ++;
  }
}