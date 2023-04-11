import { JoystickShowService } from './../../services/joystick-show.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss'],
})
export class JoystickComponent implements OnInit {

  ocultarBotones: boolean = this.JShow.ocultarBotones;
  ocultarBtnPulsar: boolean = this.JShow.ocultarBtnPulsar;

  ocultarTexto: boolean =this.JShow.ocultarTexto;
  texto: string =this.JShow.texto;

  constructor(private JShow: JoystickShowService) { }

  ngOnInit() { }

}
