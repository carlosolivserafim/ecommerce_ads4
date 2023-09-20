import { Component } from '@angular/core';
import { EstadoService } from '../estado.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.scss']
})
export class EstadoFormComponent {
  public indice:string    = '';
  public estado:string = "";
  public sigla:string = "";

  constructor(
    public estado_service:EstadoService,
    public activated_route:ActivatedRoute
  ) {
    this.activated_route.params.subscribe( (params:any)=> {
      //Caso seja um registro novo interromper a busca de dados 
      if(params.indice == undefined) return;

      this.estado_service.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any   = snapshot.val();
        this.indice    = params.indice;
        this.estado      = dado.estado;
        this.sigla     = dado.sigla;
      });
    });
  }

  salvar() {
    let dados = {
      estado:this.estado,
      sigla:this.sigla,
    };


    if(dados.estado == '') {
      document.querySelector('#estado')?.classList.add('has-error');
      return;
    }

    if(dados.sigla == '') {
      document.querySelector('#sigla')?.classList.add('has-error');
      return;
    }

    if (this.indice == ''){    
      this.estado_service.salvar(dados);
    }else{
      this.estado_service.editar(this.indice,dados);
    }
  }
}
