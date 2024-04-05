import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent {
  public usuario: any;
  public cedula: string = "";
  public nombre: string = "";
  public apellido: string = "";
  public telefono: string = "";
  public direccion: string = "";
  public correo: string = "";

  constructor(public UsuariosService: UsuariosService){}

  async obtenerUsuarioPorCedula(){
    try {
      this.usuario = await this.UsuariosService.getUserByCedula(this.cedula);
      this.nombre = this.usuario[0].nombreusuario;
      this.apellido = this.usuario[0].apellidousuario;
      this.telefono = this.usuario[0].telefonousuario;
      this.direccion = this.usuario[0].direccionusuario;
      this.correo = this.usuario[0].correousuario;
    } catch (error) {
      console.log(error);
    }
  }
}
