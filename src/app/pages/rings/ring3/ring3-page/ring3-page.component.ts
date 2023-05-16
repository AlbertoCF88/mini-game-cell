import { Component, OnInit } from '@angular/core';
import CellF3 from '../../models/extendedmodels/CellF3';
import GohanF3 from '../../models/extendedmodels/GohanF3';
import { Fase3Service } from '../services/fase3.service';
import IntroGohanF3 from '../../models/extendedmodels/IntroGohanF3';
import IntroCellF3 from '../../models/extendedmodels/IntroCellF3';
import { IntroF3Service } from '../services/intro-f3.service';
import C16 from '../../models/C16';

@Component({
  selector: 'app-ring3-page',
  templateUrl: './ring3-page.component.html',
  styleUrls: ['./ring3-page.component.scss'],
})
export class Ring3PageComponent implements OnInit {

  public gohan!: GohanF3;
  public cell!: CellF3;

  public introGohan!: IntroGohanF3;
  public introCell!: IntroCellF3;
  public c16!: C16;

  public ocultarPresentacion!: boolean;

  constructor(private fase3: Fase3Service, private intro3: IntroF3Service) { }

  ngOnInit() {
    this.gohan = this.fase3.gohan;
    this.cell = this.fase3.cell;

    this.introGohan = this.intro3.gohan;
    this.introCell = this.intro3.cell;
    this.c16 = this.intro3.c16;

    this.terminarPresntacion();
  }

  private terminarPresntacion() {
    this.intro3.presentacion$.subscribe({
      next: (activar: boolean) => {
        this.ocultarPresentacion = activar;
      }
    })
  }

  public get servicioF3(): Fase3Service {
    //con esto consigo que todos los componentes hijos tengan la misma instancia del servicio que el padre
    return this.fase3;
  }

  public get introServicio(): IntroF3Service {
    //con esto consigo que todos los componentes hijos tengan la misma instancia del servicio que el padre
    return this.intro3;
  }
}
