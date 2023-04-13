import { Component, Input, OnInit } from '@angular/core';
import Gohan from '../../../models/Gohan';
import Cell from '../../../models/Cell';

@Component({
  selector: 'app-game-f1-img',
  templateUrl: './game-f1-img.component.html',
  styleUrls: ['./game-f1-img.component.scss'],
})
export class GameF1ImgComponent implements OnInit {

  @Input() gohan!: Gohan;
  @Input() cell!: Cell;

  choqueKame: boolean = false;


  constructor() { }

  ngOnInit() { }


}
