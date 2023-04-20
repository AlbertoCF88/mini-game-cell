import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Ring2PageComponent } from './ring2-page/ring2-page.component';
import { RingsModule } from '../rings.module';
import { GameF2ImgComponent } from './components/game-f2-img/game-f2-img.component';

@NgModule({
  declarations: [
    Ring2PageComponent,
    GameF2ImgComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RingsModule,
  ],
  exports: [
    Ring2PageComponent,
    GameF2ImgComponent,

  ]
})
export class Ring2Module { }