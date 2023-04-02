import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Gohan from '../models/Gohan';
import Cell from '../models/Cell';
import { RingPageComponent } from '../ring-page.component';
import { LifeComponent } from '../shared/components/life/life.component';


@NgModule({
  declarations: [
    RingPageComponent,
    LifeComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RingPageComponent,
    LifeComponent,
  ]
})
export class RingModule { }
