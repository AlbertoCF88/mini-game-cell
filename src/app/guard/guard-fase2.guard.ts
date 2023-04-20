import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GuardFase2Guard implements CanActivate {
  //la fase 1 obviamente no necesita proteccion , simpre va a estar accesible
  //por no hacer una base de datos, guardo el localStorage el avance del juego

  constructor(private alertIon: AlertController) {}

  canActivate(): boolean{
    let nivel =  localStorage.getItem('nivel');

    if(nivel == 'fase2'){
      return true;
    }else{
      this.presentAlert();
      return false;
    }
  }
  
  async presentAlert() {
    const alert = await this.alertIon.create({
      header: ' ¡Bloqueado! 🔒',
      subHeader: 'Aún no has desbloqueado esta fase',
      message: 'Primero debes pasarte la 1ºFase',
      cssClass: 'back-alert',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
