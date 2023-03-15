import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './servicios/cliente.service';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './clientes/registro.component';
import { ProductosComponent } from './productos/productos.component';
import { FacturasComponent } from './facturas/facturas.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    HeaderComponent,
    RegistroComponent,
    ProductosComponent,
    FacturasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
