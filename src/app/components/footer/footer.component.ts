import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  contato={
    contato: "Contato",
    whatsapp: 'WhatsApp: +55 11 93958-6826',
    email: 'contato@boaventura15700',
    endereco: 'Alameda Ribeirão Preto, 266 - Bela Vista, São Paulo - SP, 01331-001'
  }

  cnpj={
    mdb: 'MDB 15700 - CNPJ 56.315.510/0001-02',
    propaganda:'PROPAGANDA ELEITORAL - BOAVENTURA 15700'
  }

  newsletter={
    titulo: 'BOAVENTURA NO COMBATE À FOME'
  }

}
