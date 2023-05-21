import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LocalStorageGuard } from '../pages/rings/models/localStorageInterface';

@Injectable({
  providedIn: 'root'
})
export class GuardFase2Guard implements CanActivate {
  //la fase 1 obviamente no necesita proteccion , simpre va a estar accesible
  //por no hacer una base de datos, guardo el localStorage el avance del juego

  private localStorage: Storage | null = null;
  private localStorageGuard: LocalStorageGuard;

  constructor(private alertIon: AlertController) {
    this.localStorageGuard = { fase1: false, fase2: false, fase3: false };
  }

  canActivate(): boolean {
    this.localStorage = localStorage;
    const localString = this.localStorage.getItem('localStorageGuard');
    
    if (localString) {
      this.localStorageGuard = JSON.parse(localString);
      if ( this.localStorageGuard &&  this.localStorageGuard.fase1 == true) {
        return true;
      } else {
        this.presentAlert();
        return false;
      }
    } else {
      this.presentAlert();
      return false;
    }
  }

  async presentAlert() {
    const alert = await this.alertIon.create({
      header: ' ¡Bloqueado! 🔒',
      subHeader: 'Aún no has desbloqueado esta fase',
      message: 'Primero debes desbloquear la 1º Fase',
      cssClass: 'back-alert',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
