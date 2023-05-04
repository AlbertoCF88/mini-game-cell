import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RingsModule } from '../rings.module';
import { Ring3PageComponent } from './ring3-page/ring3-page.component';
import { GameF3ImgComponent } from './components/game-f3-img/game-f3-img.component';
import { IntroductionF3Component } from './components/introduction-f3/introduction-f3.component';


@NgModule({
  declarations: [
    Ring3PageComponent,
    GameF3ImgComponent,
    IntroductionF3Component,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RingsModule,
  ],
  exports: [
    Ring3PageComponent,
    GameF3ImgComponent,
    IntroductionF3Component,
  ]
})
export class Ring3Module { }