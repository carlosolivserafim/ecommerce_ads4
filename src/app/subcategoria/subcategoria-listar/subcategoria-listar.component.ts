import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubcategoriaService } from '../subcategoria.service';

@Component({
  selector: 'app-subcategoria-listar',
  templateUrl: './subcategoria-listar.component.html',
  styleUrls: ['./subcategoria-listar.component.scss']
})
export class SubcategoriaListarComponent {
  public dados:Array<any> = [];

  constructor(
    public subcategoria_service: SubcategoriaService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.subcategoria_service.listar()
    .on('value', (snapshot:any)=>{
      // Limpa variavel local com os dados
      this.dados.splice(0,this.dados.length);

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      // Percorre a coleção de dados 
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.dados.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  excluir(key:string){
    this.subcategoria_service.excluir(key);
  }

  editar(key:string) {
    this.router.navigate(['/categoria/form/' + key]);
  }
}
