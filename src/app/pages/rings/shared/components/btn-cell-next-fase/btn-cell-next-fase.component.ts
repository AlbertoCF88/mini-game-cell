import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-cell-next-fase',
  templateUrl: './btn-cell-next-fase.component.html',
  styleUrls: ['./btn-cell-next-fase.component.scss'],
})
export class BtnCellNextFaseComponent implements OnInit {

  @Input() texto!: string;
  @Input() ruta!:string;
  btnActivo: boolean = false;

  constructor( private router: Router) { }

  ngOnInit() { }
  siguientePagina() {
    this.btnActivo = true;
    if (this.btnActivo == true) {
      setTimeout(() => {
        this.router.navigate([this.ruta]);
      }, 2100);
    }
  }
}
