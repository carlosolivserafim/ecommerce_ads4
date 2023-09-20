import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent {
  public indice:string    = '';
  public nome:string = "";
  public email:string = "";
  public senha:string = "";

  constructor(
    public usuario_service:UsuariosService,
    public activated_route:ActivatedRoute
  ) {
    this.activated_route.params.subscribe( (params:any)=> {
      //Caso seja um registro novo interromper a busca de dados 
      if(params.indice == undefined) return;

      this.usuario_service.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any   = snapshot.val();
        this.indice    = params.indice;
        this.nome      = dado.nome;
        this.email     = dado.email;
        this.senha     = dado.senha;
      });
    });
  }

  salvar() {
    let dados = {
      nome:this.nome,
      email:this.email,
      senha:this.senha,
    };


    if(dados.nome == '') {
      document.querySelector('#nome')?.classList.add('has-error');
      return;
    }

    if(dados.email == '') {
      document.querySelector('#email')?.classList.add('has-error');
      return;
    }

    if(dados.senha == '') {
      document.querySelector('#senha')?.classList.add('has-error');
      return;
    }

    if (this.indice == ''){    
      this.usuario_service.salvar(dados);
    }else{
      this.usuario_service.editar(this.indice,dados);
    }
  }
}
