import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { FormsModule } from '@angular/forms';
import { InsertarUsuarioComponent } from './insertar-usuario/insertar-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarUsuarioComponent,
    InsertarUsuarioComponent,
    ListarUsuariosComponent,
    MostrarUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
