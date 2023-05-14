import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-modal-name',
  templateUrl: './modal-name.component.html',
  styleUrls: ['./modal-name.component.scss'],
})
export class ModalNameComponent implements OnInit {

  public nombre: string = '';

  constructor(private modalController: ModalController,
    private alertController: AlertController) { }

  ngOnInit() {
    const nombreGuardado = localStorage.getItem('nombreMinigameCell');
    if (nombreGuardado) {
      this.nombre = nombreGuardado;
    }
  }

  async guardarNombre() {
    if (this.nombre !== '') {
      localStorage.setItem('nombreMinigameCell', this.nombre);
      this.cerrarModal();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El nombre no puede estar en blanco.',
        cssClass: 'back-alert',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }

  cerrarModal() {
    this.modalController.dismiss();
  }
}