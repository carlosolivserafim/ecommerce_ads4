import { Component } from '@angular/core';
import { EstadoService } from '../estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.scss']
})
export class EstadoListarComponent {
  public dados: Array<any> = [];

  constructor(
    public estado_service:EstadoService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.estado_service.listar()
      .on('value', (snapshot: any) => {
        // Limpa variavel local com os dados
        this.dados.splice(0, this.dados.length);

        // Dados retornados do Firebase
        let response = snapshot.val();

        // Não setar valores caso não venha
        // nenhum registro
        if (response == null) return;

        // Percorre a coleção de dados 
        Object.values(response)
          .forEach(
            (e: any, i: number) => {
              // Adiciona os elementos no vetor
              // de dados
              this.dados.push({
                estado: e.estado,
                sigla: e.sigla,
                indice: Object.keys(snapshot.val())[i]
              });
            }
          );
      });
  }


  excluir(key: string) {
    this.estado_service.excluir(key);
  }

  editar(key: string) {
    this.router.navigate(['/estado/form/' + key]);
  }
}

