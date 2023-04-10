import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction-f1',
  templateUrl: './introduction-f1.component.html',
  styleUrls: ['./introduction-f1.component.scss'],
})
export class IntroductionF1Component implements OnInit {
  //esto sirve solo para que cuando termine la animacion no cambie bruscamente
  ocultar: boolean = false;
  borrar: boolean = false;
  constructor() { }

  ngOnInit() {
    window.setTimeout(() => {
      this.ocultar = true;
    }, 11000);

    window.setTimeout(() => {
      this.borrar = true;
    }, 11900);
  }
}