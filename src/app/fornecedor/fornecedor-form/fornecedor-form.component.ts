import { Component } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';

import { EstadoService } from 'src/app/estado/estado.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent {
  public estados:Array<any> = [];
  public indice: string = '';
  public nome: string = "";
  public social: string = "";
  public cnpj: string = "";
  public contato: string = "";
  public email: string = "";
  public logradouro: string = "";
  public complemento: string = "";
  public bairro: string = "";
  public cidade: string = "";
  public estado: string = "";

  constructor(
    public fornecedor_service: FornecedorService,
    public activated_route: ActivatedRoute,
    public estado_service: EstadoService
  ) {
    this.activated_route.params.subscribe((params: any) => {
      //Caso seja um registro novo interromper a busca de dados 
      if (params.indice == undefined) return;

      this.fornecedor_service.ref().child('/' + params.indice).on('value', (snapshot: any) => {
        let dado: any = snapshot.val();
        this.indice = params.indice;
        this.nome = dado.nome;
        this.social = dado.social;
        this.cnpj = dado.cnpj;
        this.contato = dado.contato;
        this.email = dado.email;
        this.logradouro = dado.logradouro;
        this.complemento = dado.complemento;
        this.bairro = dado.bairro;
        this.cidade = dado.cidade;
        this.estado = dado.estado;
      });
    });

    this.estado_service.listar()
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
          this.estados.push({
            estado: e.estado,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );

      
    });
  }

  salvar() {
    let dados = {
      nome: this.nome,
      social: this.social,
      cnpj: this.cnpj,
      contato: this.contato,
      email: this.email,
      logradouro: this.logradouro,
      complemento: this.complemento,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado
    };


    if (dados.nome == '') {
      document.querySelector('#nome')?.classList.add('has-error');
      return;
    }
    
    if (dados.social == '') {
      document.querySelector('#social')?.classList.add('has-error');
      return;
    }

    if (dados.cnpj == '') {
      document.querySelector('#cnpj')?.classList.add('has-error');
      return;
    }

    if (dados.contato == '') {
      document.querySelector('#contato')?.classList.add('has-error');
      return;
    }

    if (dados.email == '') {
      document.querySelector('#email')?.classList.add('has-error');
      return;
    }

    if (dados.logradouro == '') {
      document.querySelector('#logradouro')?.classList.add('has-error');
      return;
    }

    if (dados.complemento == '') {
      document.querySelector('#complemento')?.classList.add('has-error');
      return;
    }

    if (dados.bairro == '') {
      document.querySelector('#bairro')?.classList.add('has-error');
      return;
    }

    if (dados.cidade == '') {
      document.querySelector('#cidade')?.classList.add('has-error');
      return;
    }    

    if (this.indice == '') {
      this.fornecedor_service.salvar(dados);
    } else {
      this.fornecedor_service.editar(this.indice, dados);
    }
  }
}

