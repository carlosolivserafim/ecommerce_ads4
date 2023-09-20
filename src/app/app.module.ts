import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { FormsModule } from '@angular/forms';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { FormaPagamentoListarComponent } from './forma-pagamento/forma-pagamento-listar/forma-pagamento-listar.component';
import { FormaPagamentoFormComponent } from './forma-pagamento/forma-pagamento-form/forma-pagamento-form.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
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
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaFormComponent,
    FormaPagamentoComponent,
    FormaPagamentoListarComponent,
    FormaPagamentoFormComponent,
    SubcategoriaComponent,
    SubcategoriaFormComponent,
    SubcategoriaListarComponent,
    UsuariosComponent,
    UsuariosListarComponent,
    UsuariosFormComponent,
    ProdutoComponent,
    ProdutoListarComponent,
    ProdutoFormComponent,
    EstadoComponent,
    EstadoListarComponent,
    EstadoFormComponent,
    FornecedorComponent,
    FornecedorFormComponent,
    FornecedorListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC48k2EFPKTMnTK_ZNtnYLzb5kLCyU7hiU",
      authDomain: "ecommerce-c3126.firebaseapp.com",
      databaseURL: "https://ecommerce-c3126-default-rtdb.firebaseio.com",
      projectId: "ecommerce-c3126",
      storageBucket: "ecommerce-c3126.appspot.com",
      messagingSenderId: "1018526662451",
      appId: "1:1018526662451:web:369516497c9f4b89480846",
      measurementId: "G-RHW0RKF5N8"
    }),
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
