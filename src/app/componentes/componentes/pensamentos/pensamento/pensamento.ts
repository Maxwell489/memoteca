import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-pensamento',
  styleUrl: './pensamento.css',
  templateUrl: './pensamento.html',
})
export class Pensamento implements OnInit {
 @Input() pensamento = {
        conteudo: 'I love Angular',
        autoria: 'Max',
        modelo: 'modelo3'
    }

  constructor() {}

  ngOnInit() {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    } 
    return 'pensamento-p';
    }

}