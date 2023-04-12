import { Joystick } from './Interface/Joystick';
import { Fase1Service } from './../../../ring1/services/fase1.service';
import { Component, Input, OnInit, SkipSelf } from '@angular/core';


@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss'],
})
export class JoystickComponent implements OnInit {

  joy!: Joystick;

  @Input() servicio!: Fase1Service;

  constructor() { }

  ngOnInit() {
    this.joy = this.servicio.joystick;
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

}