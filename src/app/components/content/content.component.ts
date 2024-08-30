import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  content={
    titulo: 'Boaventura 15700',
    conheca: 'CONHEÇA A MINHA TRAJETÓRIA',
    texto: ' Guilherme Boaventura, 34 anos,  é casado e pai do Miguel. Cresceu no Jardim Aracati e, desde jovem, trabalhou duro para ajudar sua família, superando grandes desafios. Formou-se em Administração de Empresas com uma bolsa da Caixa Econômica Federal e, após enfrentar altos e baixos, como a falência de sua empresa imobiliária, se reergueu com fé e determinação.Hoje, é líder na igreja Sara Nossa Terra e coordena projetos sociais de grande impacto, como a Rede Cozinha Escola e o Armazém Solidário, que já distribuíram mais de 7 milhões e meio de cestas básicas. Como candidato a vereador, Boaventura busca levar sua experiência e compromisso com a transformação social para construir uma São Paulo mais justa e digna para todos.'
  }

}
