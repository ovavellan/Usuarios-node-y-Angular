import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarUsuarioComponent } from "./buscar-usuario/buscar-usuario.component";
import { InsertarUsuarioComponent } from './insertar-usuario/insertar-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';

const routes: Routes = [
  {path: "buscarUsuario", component: BuscarUsuarioComponent,
  pathMatch:"full"},
  {path: "insertarUsuario", component: InsertarUsuarioComponent,
  pathMatch:"full"},
  {path: "usuarios", component: ListarUsuariosComponent,
  pathMatch: "full"},
  {path: "mostrarUsuario", component: MostrarUsuarioComponent,
  pathMatch: "full"},
  {path: "actualizarUsuario/:id", component: ActualizarUsuarioComponent,
    pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
