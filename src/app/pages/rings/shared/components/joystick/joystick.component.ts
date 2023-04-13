import { Joystick } from './Interface/Joystick';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss'],
})
export class JoystickComponent implements OnInit {

  joy!: Joystick;

  @Input() servicio!: any;//cualquier servicio pasado por padre

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