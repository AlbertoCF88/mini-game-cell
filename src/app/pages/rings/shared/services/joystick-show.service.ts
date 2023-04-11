import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoystickShowService {

  ocultarBotones: boolean = false;
  ocultarBtnPulsar: boolean = false;

  ocultarTexto: boolean = true;
  texto: string = '';
  
  constructor() { }
}
