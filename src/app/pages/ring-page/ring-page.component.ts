import { Component, OnInit } from '@angular/core';
import { Fase1Service } from './services/fase1.service';
import Gohan from './models/Gohan';
import Cell from './models/Cell';

@Component({
  selector: 'app-ring-page',
  templateUrl: './ring-page.component.html',
  styleUrls: ['./ring-page.component.scss'],
})
export class RingPageComponent implements OnInit {

  gohan!: Gohan;
  cell!: Cell;

  constructor(private fase1: Fase1Service) { }

  ngOnInit() {
    this.gohan = this.fase1.gohan;
    this.cell = this.fase1.cell;
  }


}
