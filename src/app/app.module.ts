import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { HomeLevelSelectPageComponent } from './pages/home-level-select-page/home-level-select-page.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RingsModule } from './pages/rings/rings.module';
import { Ring1Module } from './pages/rings/ring1/ring1.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeLevelSelectPageComponent,
    RulesPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RingsModule,
    Ring1Module,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

