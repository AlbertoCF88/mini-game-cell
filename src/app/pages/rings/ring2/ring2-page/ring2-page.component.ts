import { Component, OnInit } from '@angular/core';
import { Fase2Service } from '../services/fase2.service';
import GohanF2 from '../../models/extendedmodels/GohanF2';
import CellF2 from '../../models/extendedmodels/CellF2';

@Component({
  selector: 'app-ring2-page',
  templateUrl: './ring2-page.component.html',
  styleUrls: ['./ring2-page.component.scss'],
})
export class Ring2PageComponent implements OnInit {

  gohan!: GohanF2;
  cell!: CellF2;

  constructor(private fase2: Fase2Service) { }

  ngOnInit() {
    this.gohan = this.fase2.gohan;
    this.cell = this.fase2.cell;
  }

  public get servicioF2(): Fase2Service {
    //con esto consigo que todos los componentes hijos tengan la misma instancia del servicio que el padre
    return this.fase2;
  }

}
