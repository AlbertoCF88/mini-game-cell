import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { HomeLevelSelectPageComponent } from './pages/home-level-select-page/home-level-select-page.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RingsModule } from './pages/rings/rings.module';
import { Ring1Module } from './pages/rings/ring1/ring1.module';
import { Ring2Module } from './pages/rings/ring2/ring2.module';
import { Ring3Module } from './pages/rings/ring3/ring3.module';
import { ModalNameComponent } from './pages/home-level-select-page/modal-name/modal-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLevelSelectPageComponent,
    RulesPageComponent,
    ModalNameComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RingsModule,
    Ring1Module,
    Ring2Module,
    Ring3Module,
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

