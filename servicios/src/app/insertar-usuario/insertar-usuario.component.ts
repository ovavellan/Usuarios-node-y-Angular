import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-insertar-usuario',
  templateUrl: './insertar-usuario.component.html',
  styleUrls: ['./insertar-usuario.component.css']
})
export class InsertarUsuarioComponent {
  public nombre:String='';
  public apellido:String='';
  public cedula:String='';
  public telefono:String='';
  public direccion:String='';
  public correo:String='';

  constructor(public usuariosService: UsuariosService){}
    async guardarNuevoUsuario(){
      try {
        let newUsuario = this.construirObtenerNuevoObjetoUsuario();
        await this.usuariosService.saveUser(newUsuario);
        console.log("El usuario ha sido registrado con éxito")
        this.nombre = '';
        this.apellido = '';
        this.cedula = '';
        this.telefono = '';
        this.direccion = '';
        this.correo = '';
        alert("Usuario ingresado de manera exitosa");
      } catch (error) {
        console.log("Ocurrio un error", error)
      }
    }
  construirObtenerNuevoObjetoUsuario() {
    let newUsuario = {
      nombreusuario: this.nombre,
      apellidousuario: this.apellido,
      cedulausuario: this.cedula,
      telefonousuario: this.telefono,
      direccionusuario: this.direccion,
      correousuario: this.correo,
    }
    return newUsuario;
  }

}
