import { Fase1Service } from './../../services/fase1.service';
import { Component, OnInit } from '@angular/core';
import Gohan from '../../../models/Gohan';
import Cell from '../../../models/Cell';

@Component({
  selector: 'app-game-f1-img',
  templateUrl: './game-f1-img.component.html',
  styleUrls: ['./game-f1-img.component.scss'],
})
export class GameF1ImgComponent implements OnInit {

  gohan!: Gohan;
  cell!: Cell;

  choqueKame: boolean = this.fase1.choqueKame;
  lose: boolean = this.fase1.lose;
  win: boolean = this.fase1.win;

  constructor(private fase1: Fase1Service) { }

  ngOnInit() {
    this.gohan = this.fase1.gohan;
    this.cell = this.fase1.cell;
  }


}
