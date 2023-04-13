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
  btnContarChoque: number = 26;

  subscription!: Subscription;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.subscription = this.servicio.kameVsStyle$.subscribe(
      (applyStyle: boolean) => {
        if (applyStyle) {
          this.btnContarChoque = this.btnContarChoque + 0.3;
          this.cell.poderCell = this.cell.poderCell - 0.3;

          const kameGohan = this.kameGohan?.nativeElement;
          this.render.setStyle(kameGohan, 'opacity', 1);
          this.render.setStyle(kameGohan, 'left', this.btnContarChoque + 'vw');
        
          const kameCell = this.kameCell?.nativeElement;
          this.render.setStyle(kameCell, 'opacity', 1);
          this.render.setStyle(kameCell, 'width', this.cell.poderCell + '%');
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
