import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit{

  public usuario: any;
  public id: number = 0;
  public nombre: String = '';
  public apellido: String = '';
  public cedula: String = '';
  public telefono: String = '';
  public direccion: String = '';
  public correo: String = '';

  constructor(public UsuariosService: UsuariosService,
              public ActivateRoute: ActivatedRoute,
              public router:Router) {
    this.id = this.ActivateRoute.snapshot.params['idusuario'];
  }
  ngOnInit(): void {
    this.obtenerUsuarioPorId();
  }
  async obtenerUsuarioPorId() {
    try {
      this.usuario = await this.UsuariosService.getUserById(this.id);
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
      await this.UsuariosService.updateUser(this.id, usuario)
      console.log("Usuario actualizado correctamente");
      alert('Usuario actualizado correctamente');
      this.router.navigate(['/usuarios'])
    } catch (error){
      console.log(error);
    }
  }

  async eliminarUsuario() {
    try {
      await this.UsuariosService.deleteUser(this.id);
      console.log('Usuario eliminado correctamente');
      alert('Usuario eliminado correctamente');
      this.router.navigate(['/usuarios']);
    } catch (error) {
      console.log(error);
    }
  }

}
