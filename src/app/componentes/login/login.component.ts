import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  

  constructor(private loginService: LoginService, private router: Router){  
  }

  login(){
    
    if (this.email==""|| this.password == ""){
      
      swal('login errado', 'OPPS! Usuario o Contraseña incorrectas!', 'error');
      
    }else {
      this.loginService.loginusuario(this.email, this.password).subscribe(result => {
          console.log(result); 
          this.router.navigate(['home'])
          swal('cliente ingresado', 'Hola has iniciado sesión con exito', 'success');
          
        });
    }
   
   
    
    }
  }



  // if (this.email==null || this.password == null){
  //   swal('login errado', 'OPPS! debes diligenciar los campos', 'error');
  // }else{
  //   console.log(result); 
  // this.router.navigate(['home'])
  // swal('cliente ingresado', 'Hola has iniciado sesión con exito', 'success');
  // }
