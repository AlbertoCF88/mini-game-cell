import { Injectable, Input } from '@angular/core';
import { Fase1Service } from '../../ring1/services/fase1.service';

@Injectable({
  providedIn: 'root'
})
export class JoystickShowService {
  fase!: number;

  ocultarBotones: boolean = false;
  ocultarBtnPulsar: boolean = false;

  ocultarTexto: boolean = false;
  texto: string = '';
  

  constructor( ) {  }



}
