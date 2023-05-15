import { Component, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-level-select-page',
  templateUrl: './home-level-select-page.component.html',
  styleUrls: ['./home-level-select-page.component.scss'],
})
export class HomeLevelSelectPageComponent implements AfterViewInit {

  @ViewChild('bolas', { static: true }) bolas: ElementRef | undefined;

  public showModal: boolean = false;
  public nombre: string = '';

  //solo para el html
  listaBolas: Array<any> = [
    { id: 'bola1' },
    { id: 'bola2' },
    { id: 'bola3' },
    { id: 'bola4' },
    { id: 'bola5' },
    { id: 'bola6' },
    { id: 'bola7' },
  ];

  constructor(
    private ren: Renderer2,
    private el: ElementRef,
    private alertController: AlertController
  ) { }


  //  ngAfterViewInit ejecuta despues de pintar el html y asi coger los id de las bolas
  ngAfterViewInit(): void {
    this.buscarNombre();
    this.randomNumero();
    setInterval(() => { this.randomNumero() }, 5000);
    //Se repite cada 5s igual que la animacion en CSS, 5s infinito
  }

  //genera numeros aleatorios para darler posicion a las bolas
  private mathRandom(): any {
    return Math.floor(Math.random() * (100 - 0) + 0).toString();
  }

  //genera bolas en puntos aleatorios de toda la ventana
  private randomNumero(): any {

    for (let i = 1; i < this.listaBolas.length + 1; i++) {
      let aleatorioH = this.mathRandom();
      let aleatorioV = this.mathRandom();

      let bola = this.el.nativeElement.querySelector('#bola' + i)

      this.ren.setStyle(bola, 'left', aleatorioH + 'vw');
      this.ren.setStyle(bola, 'bottom', aleatorioV + 'vh');
    }
  }

  //Modal
  private buscarNombre() {
    this.showModal = true;
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
    this.showModal = false;
  }
}
