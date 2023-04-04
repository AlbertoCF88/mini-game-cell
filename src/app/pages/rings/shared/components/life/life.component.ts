import { Component, Input, OnInit } from '@angular/core';

import Gohan from '../../../models/Gohan';
import Cell from '../../../models/Cell';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss'],
})
export class LifeComponent implements OnInit {

  @Input() gohan!: Gohan;
  @Input() cell!: Cell;

  ngOnInit(): void {
  }




}
