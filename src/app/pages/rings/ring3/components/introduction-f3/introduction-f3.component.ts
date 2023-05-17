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

  constructor(private intro: IntroF3Service) { }

  ngOnInit() {
    this.intro.presentacionF3();
  }

}
