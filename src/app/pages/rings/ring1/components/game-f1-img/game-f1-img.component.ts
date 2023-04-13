import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import Gohan from '../../../models/Gohan';
import Cell from '../../../models/Cell';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-f1-img',
  templateUrl: './game-f1-img.component.html',
  styleUrls: ['./game-f1-img.component.scss'],
})
export class GameF1ImgComponent implements OnInit {
  @ViewChild('kameGohan', { static: false }) kameGohan: ElementRef | undefined;
  @ViewChild('kameCell', { static: false }) kameCell: ElementRef | undefined;

  @Input() gohan!: Gohan;
  @Input() cell!: Cell;
  @Input() servicio: any;

  // btnContarChoque valor iniciar de los dos kames


  subscription!: Subscription;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.subscription = this.servicio.kameVsStyle$.subscribe(
      (applyStyle: boolean) => {
        const kameGohan = this.kameGohan?.nativeElement;
        const kameCell = this.kameCell?.nativeElement;
        if (applyStyle) {
          this.servicio.contadorGolpeBoton =  this.servicio.contadorGolpeBoton + 0.3;
          this.cell.poderCell = this.cell.poderCell - 0.3;

          this.render.setStyle(kameGohan, 'opacity', 1);
          this.render.setStyle(kameGohan, 'left', this.servicio.contadorGolpeBoton + 'vw');

          this.render.setStyle(kameCell, 'opacity', 1);
          this.render.setStyle(kameCell, 'width', this.cell.poderCell + '%');

          if (applyStyle && !this.servicio.joystick.ocultarBtnPulsar) {
            //applyStyle si es false ha terminado el tiempo del combate
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
