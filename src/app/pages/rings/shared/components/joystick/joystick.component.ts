import { Component, OnInit } from '@angular/core';
import { Fase1Service } from '../../../ring1/services/fase1.service';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss'],
})
export class JoystickComponent  implements OnInit {

  constructor(private fase1: Fase1Service) { }

  ngOnInit() {}

}
