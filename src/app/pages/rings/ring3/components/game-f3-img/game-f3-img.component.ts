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

  activarKames!: boolean

  private wG:number=40;
  private rG:number=43;
  private wC:number=35;
  constructor(private f3: Fase3Service, private render: Renderer2) { }

  ngOnInit() {
    this.activarVSkame();

  }
  // el subcribe del boton y activar la batalla tiene que ser dos booleanos distintos
  private activarVSkame() {
    //detecta cada vez que aprietas el btn
    this.f3.kameVsStyle$.subscribe(
      (applyStyle: boolean) => {
        const kameGohan = this.kameGohan?.nativeElement;
        const kameCell = this.kameCell?.nativeElement;
        if (applyStyle) {
          //empezar en 40% y 43vw
         
          this.render.setStyle(kameGohan, 'width', (this.wG ++) + '%');
          this.render.setStyle(kameGohan, 'right', (this.rG --) + 'vw');
      //cell mueve su kame
      let stopInterval = setInterval(() => {
      
        this.render.setStyle(kameCell, 'width', (this.wC ++) + '%');
        this.render.setStyle(kameGohan, 'width', (this.wG --) + '%');
        this.render.setStyle(kameGohan, 'right', (this.rG ++) + 'vw');
      }, 2000)
        }
      });
  }


  private cellmoveKame(){    //detecta cada vez que aprietas el btn
    this.f3.kameVsStyle$.subscribe(
      (applyStyle: boolean) => {
        const kameGohan = this.kameGohan?.nativeElement;
        const kameCell = this.kameCell?.nativeElement;
        if (applyStyle) {
      let stopInterval = setInterval(() => {
        this.render.setStyle(kameCell, 'width', (this.wC ++) + '%');
        this.render.setStyle(kameGohan, 'width', (this.wG --) + '%');
        this.render.setStyle(kameGohan, 'right', (this.rG ++) + 'vw');
      }, 2000)
        }
      });
  }
}
