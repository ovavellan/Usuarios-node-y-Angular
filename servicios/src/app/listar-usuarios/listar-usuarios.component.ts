import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit{

  public usuarios: any;
  constructor(public usuariosService: UsuariosService,
     public router: Router){
  }
  ngOnInit(): void {
    this.cargarUsuarios();
  }
  cargarUsuarios(){
    this.usuariosService.getUsers().then(data=>{
      this.usuarios = data;
    })
  }
  redirectToMostrarUsuario(idusuario:number){
    this.router.navigate(['/mostrarUsuario', {idusuario:idusuario}])
  }

}
