import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para um componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com o @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta ut libero vitae ultricies. Mauris tristique orci tortor, ut congue risus molestie eget. Donec id consequat mi. Suspendisse potenti. Fusce ullamcorper vehicula elit, sed mattis nunc mattis vitae. Proin ac nisi felis. Morbi at semper ipsum. Ut quis nibh vel nunc congue vestibulum. Suspendisse at volutpat nisl. Aliquam at tellus luctus risus fermentum ultricies vitae sed enim. Nullam in ligula tincidunt, euismod est eu, interdum tellus. Suspendisse blandit velit eu elit facilisis, non elementum felis viverra.',
      autoria: 'Lipsum',
      modelo: 'modelo1'
    },
  ];

  constructor() { };

  ngOnInit(): void {

  };

}
