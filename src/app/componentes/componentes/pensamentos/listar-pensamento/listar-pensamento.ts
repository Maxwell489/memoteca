import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  imports: [RouterLink, Pensamento, NgFor, NgIf],
  selector: 'app-listar-pensamento',
  styleUrl: './listar-pensamento.css',
  templateUrl: './listar-pensamento.html',
})
export class ListarPensamento implements OnInit {

  listPensamentos = [
     {
        conteudo: 'Comunicação entre componentes',
        autoria: 'Angular',
        modelo: 'modelo3'
    },
    {
        conteudo: 'Comunicação entre componentes testes',
        autoria: 'Testes',
        modelo: 'modelo3'
    }, 
    {
            conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
            autoria: '',
            modelo: 'modelo1'
        },

  ]

  constructor() {}

  ngOnInit() {
  }
}
