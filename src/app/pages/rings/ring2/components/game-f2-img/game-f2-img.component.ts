import { Component, Input, OnInit } from '@angular/core';
import CellF2 from '../../../models/extendedmodels/CellF2';
import GohanF2 from '../../../models/extendedmodels/GohanF2';
import { Fase2Service } from '../../services/fase2.service';

@Component({
  selector: 'app-game-f2-img',
  templateUrl: './game-f2-img.component.html',
  styleUrls: ['./game-f2-img.component.scss'],
})
export class GameF2ImgComponent implements OnInit {

  @Input() gohan!: GohanF2;
  @Input() cell!: CellF2;

  unionbola: boolean = false;

  constructor(private f2: Fase2Service) { }

  ngOnInit() {
    this.unionbola = this.f2.unionbola;
  }

}
