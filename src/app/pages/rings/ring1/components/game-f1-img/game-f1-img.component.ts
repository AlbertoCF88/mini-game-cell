import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import  GohanF1  from '../../../models/extendedmodels/GohanF1';
import { Fase1Service } from '../../services/fase1.service';
import CellF1 from '../../../models/extendedmodels/CellF1';
@Component({
  selector: 'app-game-f1-img',
  templateUrl: './game-f1-img.component.html',
  styleUrls: ['./game-f1-img.component.scss'],
})
export class GameF1ImgComponent implements OnInit {
  @ViewChild('kameGohan', { static: false }) kameGohan: ElementRef | undefined;
  @ViewChild('kameCell', { static: false }) kameCell: ElementRef | undefined;

  @Input() gohan!: GohanF1;
  @Input() cell!: CellF1;

  //cambiara los estilos cunado se active el kame Vs kame
  // cada vez que el servicio le mande un true
  subscription!: Subscription;

  constructor(private render: Renderer2 , private servicio: Fase1Service) { }

  ngOnInit() {
    this.cambiarEstiloskameVsKame();
  }

  cambiarEstiloskameVsKame() {
    this.subscription = this.servicio.kameVsStyle$.subscribe(
      (applyStyle: boolean) => {
        const kameGohan = this.kameGohan?.nativeElement;
        const kameCell = this.kameCell?.nativeElement;
        if (applyStyle) {
          this.servicio.contadorGolpeBoton = this.servicio.contadorGolpeBoton + 0.3;
          this.cell.poderCell = this.cell.poderCell - 0.3;

          this.render.setStyle(kameGohan, 'opacity', 1);
          this.render.setStyle(kameGohan, 'left', this.servicio.contadorGolpeBoton + 'vw');

          this.render.setStyle(kameCell, 'opacity', 1);
          this.render.setStyle(kameCell, 'width', this.cell.poderCell + '%');

          if (!this.servicio.joystick.ocultarBtnPulsar && this.servicio.joystick.texto === 'Gohan sale victorioso') {
            //ganas
            this.render.addClass(kameGohan, 'kameWin');
            this.render.addClass(kameCell, 'kameCellPierde');
          }
          if (!this.servicio.joystick.ocultarBtnPulsar && this.servicio.joystick.texto === 'Cell sale victorioso') {
            //pierdes
            this.render.setStyle(kameGohan, 'opacity', 0);
            this.render.setStyle(kameCell, 'width', 64 + '%');
          }
        }

      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
