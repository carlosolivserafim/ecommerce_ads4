import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { HomeComponent } from './home/home.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { FormaPagamentoFormComponent } from './forma-pagamento/forma-pagamento-form/forma-pagamento-form.component';
import { FormaPagamentoListarComponent } from './forma-pagamento/forma-pagamento-listar/forma-pagamento-listar.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListarComponent } from './usuarios/usuarios-listar/usuarios-listar.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { EstadoComponent } from './estado/estado.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { EstadoFormComponent } from './estado/estado-form/estado-form.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'categoria', component:CategoriaComponent, 
    children:[
      { path:'', redirectTo:'listar', pathMatch:'full' },
      { path:'listar', component:CategoriaListarComponent },
      { path:'form', component:CategoriaFormComponent },
      { path:'form/:indice', component:CategoriaFormComponent }

    ]
  },
  { path:'forma-pagamento', component:FormaPagamentoComponent,
    children:[
      { path:'', redirectTo:'listar', pathMatch:'full'},
      { path:'listar', component:FormaPagamentoListarComponent },
      { path:'form', component:FormaPagamentoFormComponent },
      { path:'form/:indice', component:FormaPagamentoFormComponent },
    ]
  },
  { path:'subcategoria', component:SubcategoriaComponent,
    children:[
      { path:'', redirectTo:'listar', pathMatch:'full'},
      { path:'listar', component:SubcategoriaListarComponent },
      { path:'form', component:SubcategoriaFormComponent },
      { path:'form/:indice', component:SubcategoriaFormComponent },
    ]
  },
  { path:'usuarios', component:UsuariosComponent,
    children:[
      { path:'', redirectTo:'listar', pathMatch:'full'},
      { path:'listar', component:UsuariosListarComponent },
      { path:'form', component:UsuariosFormComponent },
      { path:'form/:indice', component:UsuariosFormComponent },
    ]
  } ,
  { path:'produto', component:ProdutoComponent,
    children:[
      { path:'', redirectTo:'listar', pathMatch:'full'},
      { path:'listar', component:ProdutoListarComponent },
      { path:'form', component:ProdutoFormComponent },
      { path:'form/:indice', component:ProdutoListarComponent },
    ]
  } ,
  { path:'estado', component:EstadoComponent,
    children:[
      { path:'', redirectTo:'listar', pathMatch:'full'},
      { path:'listar', component:EstadoListarComponent },
      { path:'form', component:EstadoFormComponent },
      { path:'form/:indice', component:EstadoFormComponent },
    ]
  } ,
  { path:'fornecedor', component:FornecedorComponent,
    children:[
      { path:'', redirectTo:'listar', pathMatch:'full'},
      { path:'listar', component:FornecedorListarComponent },
      { path:'form', component:FornecedorFormComponent },
      { path:'form/:indice', component:FornecedorFormComponent },
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
