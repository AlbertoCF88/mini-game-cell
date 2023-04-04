import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.scss'],
})
export class RulesPageComponent implements OnInit {
  texto: string = 'Bienvenido a mi torneo, \n Estas son mis reglas: \n';
  txtGolpe: string = ' Acción golpe físico. \n ';
  txtDefensa: string =
    ' Acción defensa de los ataques físicos y en menor grado de los ataques Ki.\n';
  txtAcumular: string = ' Acción acumular Ki para usar ataques Ki.\n';
  txtKi: string = ' Acción técnica Ki una vez acumulado Ki.\n';
  txtEmpezar: string = ' Aprieta ya a jugar o ¿tienes miedo?.\n';
  mostrar: boolean = false;
  btnActivo: boolean = false;

  @ViewChild('maquinas') maquinas!: ElementRef | undefined;
  @ViewChild('maquinaGolpe') maquinaGolpe!: ElementRef | undefined;
  @ViewChild('maquinaDefensa') maquinaDefensa!: ElementRef | undefined;
  @ViewChild('maquinaCarga') maquinaCarga!: ElementRef | undefined;
  @ViewChild('maquinaKi') maquinaKi!: ElementRef | undefined;
  @ViewChild('empezar') empezar!: ElementRef | undefined;
  //iconos
  @ViewChild('golpe') golpe!: ElementRef | undefined;
  @ViewChild('defensa') defensa!: ElementRef | undefined;
  @ViewChild('carga') carga!: ElementRef | undefined;
  @ViewChild('ki') ki!: ElementRef | undefined;

  constructor(private ruta: Router,private ren: Renderer2) { }

  siguientePagina() {
    this.btnActivo = true;
    if (this.btnActivo) {
      setTimeout(() => {
        this.ruta.navigate(['/fase1']);
      }, 2100);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.maquina(this.texto, this.maquinas!, 65);
      setTimeout(() => {
        this.maquina(this.txtGolpe, this.maquinaGolpe!, 65, this.golpe!);
      }, 3500);
      setTimeout(() => {
        this.maquina(this.txtDefensa, this.maquinaDefensa!, 65, this.defensa!);
      }, 5500);
      setTimeout(() => {
        this.maquina(this.txtAcumular, this.maquinaCarga!, 65, this.carga!);
      }, 10900);
      setTimeout(() => {
        this.maquina(this.txtKi, this.maquinaKi!, 65, this.ki!);
      }, 13900);
      setTimeout(() => {
        this.maquina(this.txtEmpezar, this.empezar!, 65);
      }, 16900);
    }, 3000);
  }

  //efecto maquina de escribir estilo videojuego para imprimir por pantalla texto explicativo del juego
  maquina(texto: string, maquina: ElementRef, intervalo: number , icono?:ElementRef) {
    const ELEMENTO = icono?.nativeElement;
    const LONGITUD = texto.length;
    const TEXTO = texto;
    const MAQUINA = maquina.nativeElement;

    if(icono){
      this.ren.removeClass(ELEMENTO, 'd-none');
    }
    var i = 0;
    const timer = setInterval(() => {
      MAQUINA.innerHTML =
        MAQUINA.innerHTML.substring(0, MAQUINA.innerHTML.length - 1) +
        TEXTO.charAt(i) +
        '_';
      if (i >= LONGITUD) {
        clearInterval(timer);
        MAQUINA.innerHTML = MAQUINA.innerHTML.substring(0, LONGITUD);
      } else {
        i++;
      }
    }, intervalo);

    if(TEXTO == this.txtEmpezar){
      this.mostrar = true;
    }

  }
}
