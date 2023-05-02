import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import CellF2 from '../../../models/extendedmodels/CellF2';
import GohanF2 from '../../../models/extendedmodels/GohanF2';
import { Fase2Service } from '../../services/fase2.service';


@Component({
  selector: 'app-game-f2-img',
  templateUrl: './game-f2-img.component.html',
  styleUrls: ['./game-f2-img.component.scss'],
})
export class GameF2ImgComponent implements OnInit {
  @ViewChild('bolaUnion', { static: false }) bolaUnion: ElementRef | undefined;

  @Input() gohan!: GohanF2;
  @Input() cell!: CellF2;

  unionbola!: boolean;

  constructor(private f2: Fase2Service, private render: Renderer2) { }

  ngOnInit() {
    this.activarBolaGigante();
    this.kameVsKame()
    this.cellmueveBola();
  }

  activarBolaGigante() {
    this.f2.unionbola$.subscribe({
      next: (activar: boolean) => {
        this.unionbola = activar;

      }
    });
  }

  kameVsKame() {
    //detecta cada vez que aprietas el btn
    this.f2.kameVsStyle$.subscribe(
      (applyStyle: boolean) => {
        const bolaUnion = this.bolaUnion?.nativeElement;
        if (applyStyle) {
          this.f2.cell.poderCell = this.f2.cell.poderCell - 0.5;
          this.render.setStyle(bolaUnion, 'right', this.f2.cell.poderCell + 'vw');
        }
      });
  }

  cellmueveBola() {
    this.f2.cellBola$.subscribe(
      (activar: boolean) => {
        const bolaUnion = this.bolaUnion?.nativeElement;
        if (activar) {
          console.log("bolaUnion", bolaUnion)
          let stopInterval = setInterval(() => {
            this.render.setStyle(bolaUnion, 'right', this.f2.cell.poderCell + 'vw');
            this.f2.cell.poderCell = this.f2.cell.poderCell + 0.5;
            console.log("poder cell", this.f2.cell.poderCell)
            //comprobar ganador del combate
            if (this.cell.poderCell <= 10 || this.cell.poderCell >= 72) {
              clearInterval(stopInterval);
              if (this.cell.poderCell <= 10) {
                //ganas
                this.gohan.gohanBase=true;
                this.unionbola = false;
                this.f2.joystick.ocultarBtnPulsar = false;
                this.gohan.kameGohan = false;
                this.cell.kameCell = false;
                this.cell.cellPierdeCombate = true;
                this.cell.heridokameCell = true;
                this.cell.vidaCell = 0;
                this.f2.barraCEll();
                setTimeout(() => {
                  this.cell.bocadillo = true;
                 setTimeout(() => {
                   this.f2.cambiarValorWinGif(true);
                 }, 2500);
                }, 1500);
              } else {
                //pierdes
                this.unionbola = false;
                this.f2.joystick.ocultarBtnPulsar = false;
                this.gohan.kameGohan = false;
                this.cell.kameCell = false;
                this.cell.baseCell = true;
                this.gohan.vidaGohan = 0;
                this.f2.barraGohan();
                this.f2.gohan.gohanPierdeCombate = true;
                this.f2.cell.baseCell=false;
              }


            }
          }, this.f2.fallos)
        }
      });
  }

}
