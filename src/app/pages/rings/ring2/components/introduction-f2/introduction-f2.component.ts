import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import CellF2 from '../../../models/extendedmodels/CellF2';
import GohanF2 from '../../../models/extendedmodels/GohanF2';
import { Fase2Service } from '../../services/fase2.service';

@Component({
  selector: 'app-introduction-f2',
  templateUrl: './introduction-f2.component.html',
  styleUrls: ['./introduction-f2.component.scss'],
})
export class IntroductionF2Component implements OnInit {
  @Output() finPresentacion: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() gohan!: GohanF2;
  @Input() cell!: CellF2;

  //esto sirve solo para que cuando termine la animacion no cambie bruscamente


  constructor(private f2: Fase2Service) { }

  ngOnInit() {
    this.presentacionF2();

  }

  presentacionF2() {
    this.f2.descansoPjs(true);
    setTimeout(() => {
      this.f2.descansoPjs(false);
      this.cell.cargaCell = true;
      this.gohan.cargaGohan = true;
      let tiempo: any = setInterval(() => {
        this.cell.acumularCargaCell++;
        this.gohan.acumularCargaGohan++;

        if (this.cell.acumularCargaCell === 4) {
          clearInterval(tiempo);
          this.cell.cargaCell = false;
          this.gohan.cargaGohan = false;
          this.f2.descansoPjs(true);
          this.cell.bocadillo = true;
          setTimeout(() => {
            this.finPresentacion.emit(false)
          }, 2800);
        }
      }, 500);

    }, 2100);
  }

}
