import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Ring1PageComponent } from './ring1-page/ring1-page.component';
import { RingsModule } from '../rings.module';

@NgModule({
  declarations: [
    Ring1PageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RingsModule,
  ],
  exports: [
    Ring1PageComponent,
  ]
})
export class Ring1Module { }




