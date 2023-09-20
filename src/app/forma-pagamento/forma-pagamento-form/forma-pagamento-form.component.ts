import { Component, DoBootstrap } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-form',
  templateUrl: './forma-pagamento-form.component.html',
  styleUrls: ['./forma-pagamento-form.component.scss']
})
export class FormaPagamentoFormComponent {

  public indice:string    = '';
  public descricao:string = ""; 

  constructor(
    public forma_pagamento_service: FormaPagamentoService,
    public activated_route:ActivatedRoute
  ) {
    this.activated_route.params.subscribe( (params:any)=> {
      if(params.indice == undefined) return;

      this.forma_pagamento_service.ref().child('/' + params.indice).on('value', (snapshot:any)=> {
        let dados:any  = snapshot.val();
        this.indice    = params.indice;
        this.descricao = dados.descricao;
      });
    });
  }

  salvar() {
    let dados = {
      descricao:this.descricao
    }

    if(dados.descricao == '') {
      document.querySelector('#descricao')?.classList.add('has-error');
      return;
    }

    if(this.indice == '') {
      this.forma_pagamento_service.salvar(dados);
    } else {
      this.forma_pagamento_service.editar(this.indice,dados);
    }
  }

}
