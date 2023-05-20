import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import CellF3 from '../../../models/extendedmodels/CellF3';
import GohanF3 from '../../../models/extendedmodels/GohanF3';
import { Fase3Service } from '../../services/fase3.service';

@Component({
  selector: 'app-game-f3-img',
  templateUrl: './game-f3-img.component.html',
  styleUrls: ['./game-f3-img-gohan.component.scss', './game-f3-img-cell.component.scss'],
})
export class GameF3ImgComponent implements OnInit {
  @ViewChild('kameGohan', { static: false }) kameGohan: ElementRef | undefined;
  @ViewChild('kameCell', { static: false }) kameCell: ElementRef | undefined;

  @Input() gohan!: GohanF3;
  @Input() cell!: CellF3;

  //para mover kames
  private wG: number = 40;
  private rG: number = 43;
  private wC: number = 35;

  constructor(private f3: Fase3Service, private render: Renderer2) { }

  ngOnInit() {
    this.cellmoveKame();
    this.gohanMoveKame();
  }


  private gohanMoveKame() {
    //detecta cada vez que aprietas el btn
    this.f3.activarGohanKame$.subscribe(
      (applyStyle: boolean) => {
        const kameGohan = this.kameGohan?.nativeElement;
        const kameCell = this.kameCell?.nativeElement;
        if (applyStyle) {
          this.render.setStyle(kameGohan, 'width', (this.wG++) + '%');
          this.render.setStyle(kameGohan, 'right', (this.rG--) + 'vw');
          this.render.setStyle(kameCell, 'width', (this.wC--) + '%');
          if (this.wG >= 60) {
            this.render.setStyle(kameCell, 'opacity', 0.2);
          }
        }
      });
  }

  private cellmoveKame() {
    this.f3.activarCellKame$.subscribe(
      (applyStyle: boolean) => {
        const kameGohan = this.kameGohan?.nativeElement;
        const kameCell = this.kameCell?.nativeElement;
        if (applyStyle) {
          let stopInterval = setInterval(() => {
            this.render.setStyle(kameCell, 'width', (this.wC++) + '%');
            this.render.setStyle(kameGohan, 'width', (this.wG--) + '%');
            this.render.setStyle(kameGohan, 'right', (this.rG++) + 'vw');
            if (this.wG <= 60) {
              this.render.setStyle(kameCell, 'opacity', 0.9);
            }
            //ganadores
            if (this.wG >= 66) {
              //gana gohan
              clearInterval(stopInterval);
              this.f3.cambiarValorActivarCellKame(false);
              this.f3.cambiarValorActivarGohanKame(false);
              this.f3.joystick.ocultarBtnPulsar = false;
              this.f3.cell.vidaCell = 1;
              this.f3.barraCEll();
              this.f3.primeraFaseActivada();
            }
            if (this.wG < 0) {
              //gana cell
              clearInterval(stopInterval);
              this.f3.cambiarValorActivarCellKame(false);
              this.f3.cambiarValorActivarGohanKame(false);
              this.f3.joystick.ocultarBtnPulsar = false;
              this.f3.gohan.vidaGohan = -100;
              this.f3.barraGohan();
              this.f3.gohan.pierde = true;
            }
          }, 158)
        }
      });
  }

}
