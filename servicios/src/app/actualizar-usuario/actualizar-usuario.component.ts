import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  public usuario: any;
  public id: number = 0;
  public nombre: string = '';
  public apellido: string = '';
  public cedula: string = '';
  public telefono: string = '';
  public direccion: string = '';
  public correo: string = '';

  constructor(
    public usuariosService: UsuariosService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    // Obtener el id de la URL
    const idFromRoute = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = idFromRoute ? +idFromRoute : 0; // Convierte a número si no es nulo
  }

  ngOnInit(): void {
    this.obtenerUsuarioPorId();
  }

  async obtenerUsuarioPorId() {
    try {
      this.usuario = await this.usuariosService.getUserById(this.id);
      this.nombre = this.usuario[0].nombreusuario;
      this.apellido = this.usuario[0].apellidousuario;
      this.cedula = this.usuario[0].cedulausuario;
      this.telefono = this.usuario[0].telefonousuario;
      this.direccion = this.usuario[0].direccionusuario;
      this.correo = this.usuario[0].correousuario;
    } catch (error) {
      console.log(error);
    }
  }

  async actualizarUsuario(){
    try{
      const usuario = {
        nombreusuario: this.nombre,
        apellidousuario: this.apellido,
        cedulausuario: this.cedula,
        telefonousuario: this.telefono,
        direccionusuario: this.direccion,
        correousuario: this.correo
      };
      await this.usuariosService.updateUser(this.id, usuario)
      console.log("Usuario actualizado correctamente");
    } catch (error){
      console.log(error);
    }
  }
}
