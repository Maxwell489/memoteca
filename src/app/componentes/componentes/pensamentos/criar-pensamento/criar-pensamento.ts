import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-criar-pensamento',
  styleUrl: './criar-pensamento.css',
  templateUrl: './criar-pensamento.html',
})
export class CriarPensamento implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Max',
    modelo: 'modelo1'
  }

  ngOnInit() {
  }

  salvarPensamento() {
    alert('Pensamento salvo com sucesso!');
  }

  cancelarPensamento() {
    alert('Pensamento cancelado.');
  }

}
