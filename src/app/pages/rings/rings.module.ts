import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { LifeComponent } from './shared/components/life/life.component';
import { EnergyComponent } from './shared/components/energy/energy.component';
import { JoystickComponent } from './shared/components/joystick/joystick.component';
import { ScorekeeperComponent } from './shared/components/scorekeeper/scorekeeper.component';
import { BtnCellNextFaseComponent } from './shared/components/btn-cell-next-fase/btn-cell-next-fase.component';




@NgModule({
  declarations: [

    LifeComponent,
    EnergyComponent,
    JoystickComponent,
    ScorekeeperComponent,
    BtnCellNextFaseComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    LifeComponent,
    EnergyComponent,
    JoystickComponent,
    ScorekeeperComponent,
    BtnCellNextFaseComponent,
  ]
})
export class RingsModule { }
