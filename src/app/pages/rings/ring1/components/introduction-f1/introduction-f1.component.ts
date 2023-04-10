import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-introduction-f1',
  templateUrl: './introduction-f1.component.html',
  styleUrls: ['./introduction-f1.component.scss'],
})
export class IntroductionF1Component implements OnInit {
  @Output() finPresentacion: EventEmitter<boolean> = new EventEmitter<boolean>();

  //esto sirve solo para que cuando termine la animacion no cambie bruscamente
  ocultar: boolean = false;
  borrar: boolean = false;
  constructor() { }

  ngOnInit() {
   setTimeout(() => {
      this.ocultar = true;
    }, 11000);

    setTimeout(() => {
      this.borrar = true;
      this.finPresentacion.emit(false)
    }, 11900);

  }
}