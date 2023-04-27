import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Ring2PageComponent } from './ring2-page/ring2-page.component';
import { RingsModule } from '../rings.module';
import { GameF2ImgComponent } from './components/game-f2-img/game-f2-img.component';
import { IntroductionF2Component } from './components/introduction-f2/introduction-f2.component';

@NgModule({
  declarations: [
    Ring2PageComponent,
    GameF2ImgComponent,
    IntroductionF2Component,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RingsModule,
  ],
  exports: [
    Ring2PageComponent,
    GameF2ImgComponent,
    IntroductionF2Component,
  ]
})
export class Ring2Module { }