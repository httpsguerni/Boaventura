import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menu={
    home: 'HOME',
    trajetoria: 'MINHA TRAJETÓRIA',
    propostas: 'MINHAS PROPOSTAS',
    projetos: 'MEUS PROJETOS',
    grupo: 'ENTRAR NO GRUPO DE WHATSAPP',
    contatos: 'CONTATOS'
  }


}
