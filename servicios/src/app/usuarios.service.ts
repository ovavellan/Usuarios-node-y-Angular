import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url= "http://localhost:3000/";
  constructor(public http:HttpClient) { }

  //Consultar usuario por cédula
  getUserByCedula(cedula: String){
    return new Promise(resolve => {
      this.http.get(this.url + 'usuario/' + cedula).subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  //Consultar usuario por ID
  getUserById(id: number){
    return new Promise(resolve => {
      this.http.get(this.url + 'usuario/getById/' + id).subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  //Consultar todos los usuarios
  getUsers(){
    return new Promise(resolve => {
      this.http.get(this.url + 'usuarios').subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }


  //Insertar un usuario
  saveUser(data: any){
    return new Promise(resolve => {
      this.http.post(this.url + 'usuario', data).subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  //Actualizar un usuario
  updateUser(id: number, usuario: any){
    return new Promise(resolve => {
      this.http.put(this.url + 'usuario/update/' + id, usuario).subscribe({
        next: (data) => {
          resolve(data);
        },
        error(err){
          console.log(err)
        }
      })
    })
  }

  //Eliiminar un usuario por id
  deleteUser(id: number) {
    return new Promise(resolve => {
      this.http.delete(this.url + 'usuario/delete/' + id).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

}
