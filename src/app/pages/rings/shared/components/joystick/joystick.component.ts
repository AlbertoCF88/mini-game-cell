import { Fase1Service } from '../../../ring1/services/fase1.service';
import { JoystickShowService } from './../../services/joystick-show.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss'],
})
export class JoystickComponent implements OnInit {
  @Input() fase!: number;

  ocultarBotones: boolean = this.jShow.ocultarBotones;
  ocultarBtnPulsar: boolean = this.jShow.ocultarBtnPulsar;

  ocultarTexto: boolean = this.jShow.ocultarTexto;
  texto: string = this.jShow.texto;

  constructor(private jShow: JoystickShowService,
     private fase1: Fase1Service) { }

  ngOnInit() { }

  choqueKames(){
    switch (this.fase) {
      case 1:
        this.fase1.choqueKames();
        break;
    }
  }
  accionGolpe(accion:string){
    console.log("golep", accion)
    console.log("fase" , this.fase)
    switch (this.fase) {
      case 1:
        this.fase1.accionGolpe(accion);
        break;
    }
  }
  accionDefensa(accion:string){
    switch (this.fase) {
      case 1:
        this.fase1.accionDefensa(accion);
        break;
    }
  }
  accionCarga(accion:string){
    switch (this.fase) {
      case 1:
        this.fase1. accionCarga(accion);
        break;
    }
  }
  accionKi(accion:string){
    switch (this.fase) {
      case 1:
        this.fase1.accionKi(accion);
        break;
    }
  }
}
