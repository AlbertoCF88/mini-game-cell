import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RingPageComponent } from '../ring-page.component';
import { LifeComponent } from '../shared/components/life/life.component';
import { IonicModule } from '@ionic/angular';
import { EnergyComponent } from '../shared/components/energy/energy.component';
import { JoystickComponent } from '../shared/components/joystick/joystick.component';


@NgModule({
  declarations: [
    RingPageComponent,
    LifeComponent,
    EnergyComponent,
    JoystickComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    RingPageComponent,
    LifeComponent,
    EnergyComponent,
    JoystickComponent,
  ]
})
export class RingModule { }
