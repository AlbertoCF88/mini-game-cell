import { Component, OnInit } from '@angular/core';
import CellF3 from '../../models/extendedmodels/CellF3';
import GohanF3 from '../../models/extendedmodels/GohanF3';
import { Fase3Service } from '../services/fase3.service';

@Component({
  selector: 'app-ring3-page',
  templateUrl: './ring3-page.component.html',
  styleUrls: ['./ring3-page.component.scss'],
})
export class Ring3PageComponent implements OnInit {
  
  gohan!: GohanF3;
  cell!: CellF3;

  ocultarPresentacion: boolean = true;

  constructor(private fase3: Fase3Service) { }

  ngOnInit() {
    this.gohan = this.fase3.gohan;
    this.cell = this.fase3.cell;
  }

  public get servicioF3(): Fase3Service {
    //con esto consigo que todos los componentes hijos tengan la misma instancia del servicio que el padre
    return this.fase3;
  }
}
