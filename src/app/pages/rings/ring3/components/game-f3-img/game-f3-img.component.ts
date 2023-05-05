import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import CellF3 from '../../../models/extendedmodels/CellF3';
import GohanF3 from '../../../models/extendedmodels/GohanF3';
import { Fase3Service } from '../../services/fase3.service';

@Component({
  selector: 'app-game-f3-img',
  templateUrl: './game-f3-img.component.html',
  styleUrls: ['./game-f3-img-gohan.component.scss','./game-f3-img-ceell.component.scss'],
})
export class GameF3ImgComponent  implements OnInit {
  
  @Input() gohan!: GohanF3;
  @Input() cell!: CellF3;

  constructor(private f: Fase3Service, private render: Renderer2) { }

  ngOnInit() {}

}
