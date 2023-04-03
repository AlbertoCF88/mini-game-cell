import { Component, Input, OnInit } from '@angular/core';
import Cell from '../../../models/Cell';
import Gohan from '../../../models/Gohan';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss'],
})
export class LifeComponent implements OnInit {

  @Input() gohan!: Gohan
  @Input() cell!: Cell

  ngOnInit(): void {
  }




}
