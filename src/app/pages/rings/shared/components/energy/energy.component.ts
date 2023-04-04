import { Component, Input, OnInit } from '@angular/core';
import Cell from '../../../models/Cell';
import Gohan from '../../../models/Gohan';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {

  @Input() gohan!: Gohan
  @Input() cell!: Cell

  listEnergiaGohan: number[] = []
  listEnergiaCell: number[] = []

  constructor() { }

  ngOnInit() {
    this.cargasPjs()
  }

  private cargasPjs() {
    for (let i = 1; i <= this.gohan.acumularCargaGohan; i++) {
      this.listEnergiaGohan.push(i);
    }
    for (let i = 1; i <= this.cell.acumularCargaCell; i++) {
      this.listEnergiaCell.push(i);
    }
  }

}
