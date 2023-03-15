import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private endPoint:HttpClient) { }

  loginusuario(usuario: string, password: string){
   return this.endPoint.post('http://localhost:8080/api/login', {"correoElectronico": usuario, "contrasena": password});
         

   }

   logout(): void{
    this.loginusuario = null;
   
   }
}
