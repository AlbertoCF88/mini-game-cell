import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Ring1PageComponent } from './ring1-page/ring1-page.component';
import { RingsModule } from '../rings.module';
import { IntroductionF1Component } from './components/introduction-f1/introduction-f1.component';

@NgModule({
  declarations: [
    Ring1PageComponent,
    IntroductionF1Component,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RingsModule,
  ],
  exports: [
    Ring1PageComponent,
    IntroductionF1Component,
  ]
})
export class Ring1Module { }




