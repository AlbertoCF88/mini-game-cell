import { Component, Input, OnInit } from '@angular/core';
import IntroGohanF3 from '../../../models/extendedmodels/IntroGohanF3';
import IntroCellF3 from '../../../models/extendedmodels/IntroCellF3';
import C16 from '../../../models/C16';
import { IntroF3Service } from '../../services/intro-f3.service';
;

@Component({
  selector: 'app-introduction-f3',
  templateUrl: './introduction-f3.component.html',
  styleUrls: ['./introduction-f3.component.scss'],
})
export class IntroductionF3Component implements OnInit {

  @Input() gohan!: IntroGohanF3;
  @Input() cell!: IntroCellF3;
  @Input() c16!: C16;

  // public gohan: IntroGohanF3 = new IntroGohanF3(100, 1, 3, 0);
  // public cell: IntroCellF3 = new IntroCellF3(100, 1, 5, 0);
  // public c16: C16 = new C16();
  constructor(private intro: IntroF3Service) { }

  ngOnInit() {

    this.intro.presentacionF3();
    console.log("cel carga", this.cell.acumularCargaCell)
  }

  // presentacionF3() {
  //   this.gohan.defensaSS1 = true;
  //   this.cell.base = true
  //   setTimeout(() => {
  //     this.cell.base=false
  //     this.cell.carga = true;
  //     let tiempo: any = setTimeout(() => {
  //       this.cell.acumularCargaCell++;
  //       if (this.cell.acumularCargaCell == 5) {
  //         clearInterval(tiempo);
  //         this.cell.carga = false;
  //         this.cell.base = true;
  //         setTimeout(() => {
  //           this.cell.bocadillo1 = true;
  //           this.cell.bocadillo2 = true;
  //           setTimeout(() => {
  //             this.cell.bocadillo1 = false;
  //             this.cell.bocadillo2 = false;
  //             this.cell.bocadillo3 = true;
  //             setTimeout(() => {
  //               this.cell.bocadillo3 = false;
  //             }, 5000);
  //           }, 5000);
  //         }, 2500);
  //       }
  //     }, 700);
  //   }, 1000);
  // }

}
