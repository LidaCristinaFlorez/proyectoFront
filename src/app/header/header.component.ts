import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(loginService:LoginService, private router: Router){}

  logout(): void{
    this.logout
    swal('Logout', 'Has cerrado sesión con exito!', 'success');
    this.router.navigate(['login'])
  }
  
  

}
