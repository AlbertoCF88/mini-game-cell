
import Cell from '../../../models/Cell';
import Gohan from '../../../models/Gohan';

import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss'],
})
export class LifeComponent  implements OnInit  {


  @Input() gohan!:Gohan
  @Input() cell!:Cell

  ngOnInit(): void {
  console.log("gohan", this.gohan)
  }

  


}
