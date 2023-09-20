import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcategoriaService } from '../subcategoria.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'app-subcategoria-form',
  templateUrl: './subcategoria-form.component.html',
  styleUrls: ['./subcategoria-form.component.scss']
})
export class SubcategoriaFormComponent {
  public categorias:Array<any> = [];
  public indice:string    = '';
  public descricao:string = "";

  constructor(
    public subcategoria_service:SubcategoriaService,
    public activated_route:ActivatedRoute,
    public categoria_service:CategoriaService
  ) {
    this.activated_route.params.subscribe( (params:any)=> {
      //Caso seja um registro novo interromper a busca de dados 
      if(params.indice == undefined) return;

      this.subcategoria_service.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any   = snapshot.val();
        this.indice    = params.indice;
        this.descricao = dado.descricao;
      });
    });

    this.categoria_service.listar()
    .once('value',(snapshot:any) => {

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.categorias.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );

      
    });
  }

  salvar() {
    let dados = {
      descricao:this.descricao
    };

    if(dados.descricao == '') {
      document.querySelector('#descricao')?.classList.add('has-error');
      return;
    }

    if (this.indice == ''){    
      this.subcategoria_service.salvar(dados);
    }else{
      this.subcategoria_service.editar(this.indice,dados);
    }
  }
}
