import { Component, OnInit } from '@angular/core';

import Gohan from '../../models/Gohan';
import Cell from '../../models/Cell';
import { Fase1Service } from '../services/fase1.service';

@Component({
  selector: 'app-ring1-page',
  templateUrl: './ring1-page.component.html',
  styleUrls: ['./ring1-page.component.scss'],
})
export class Ring1PageComponent implements OnInit {

  gohan!: Gohan;
  cell!: Cell;

  ocultarPresentacion: boolean = true;


  constructor(private fase1: Fase1Service) { }

  ngOnInit() {
    this.gohan = this.fase1.gohan;
    this.cell = this.fase1.cell;
  }


}
