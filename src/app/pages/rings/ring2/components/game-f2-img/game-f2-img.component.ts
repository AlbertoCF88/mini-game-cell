import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import CellF2 from '../../../models/extendedmodels/CellF2';
import GohanF2 from '../../../models/extendedmodels/GohanF2';
import { Fase2Service } from '../../services/fase2.service';
import { Subscription } from 'rxjs';

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
  moverBola!: Subscription;

  constructor(private f2: Fase2Service, private render: Renderer2) { }

  ngOnInit() {
    this.activarBolaGigante();
    this.kameVsKame()

  }

  activarBolaGigante() {
    this.f2.unionbola$.subscribe({
      next: (activar: boolean) => {
        this.unionbola = activar;

        if(this.unionbola===true){

          this.cellmueveBola();
        }
      }
    });
  }

  kameVsKame() {


    this.moverBola = this.f2.kameVsStyle$.subscribe(
      (applyStyle: boolean) => {
        const bolaUnion = this.bolaUnion?.nativeElement;
        if (applyStyle) {
          this.f2.cell.poderCell = this.f2.cell.poderCell - 0.5;

          this.render.setStyle(bolaUnion, 'right', this.f2.cell.poderCell + 'vw');


          // if (!this.servicio.joystick.ocultarBtnPulsar && this.servicio.joystick.texto === 'Gohan sale victorioso') {
          //   //ganas
          //   this.render.addClass(kameGohan, 'kameWin');
          //   this.render.addClass(kameCell, 'kameCellPierde');
          // }
          // if (!this.servicio.joystick.ocultarBtnPulsar && this.servicio.joystick.texto === 'Cell sale victorioso') {
          //   //pierdes
          //   this.render.setStyle(kameGohan, 'opacity', 0);
          //   this.render.setStyle(kameCell, 'width', 64 + '%');
          // }
        }

      });
  }

  cellmueveBola() {
    const bolaUnion = this.bolaUnion?.nativeElement;
    console.log("bolaUnion",bolaUnion)
    setInterval(() => {
      this.cell.poderCell = this.cell.poderCell + 0.5;
      this.render.setStyle(bolaUnion, 'right', this.f2.cell.poderCell + 'vw');
    }, 1000)
  }



  ngOnDestroy() {
    this.moverBola.unsubscribe();
  }

}
