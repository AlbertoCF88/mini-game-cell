import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { LifeComponent } from './shared/components/life/life.component';
import { EnergyComponent } from './shared/components/energy/energy.component';
import { JoystickComponent } from './shared/components/joystick/joystick.component';




@NgModule({
  declarations: [

    LifeComponent,
    EnergyComponent,
    JoystickComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    LifeComponent,
    EnergyComponent,
    JoystickComponent,

  ]
})
export class RingsModule { }
