import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { TipoDocumento } from './tipoDocumento';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  public cliente: Cliente = new Cliente()
  tipoDocumento: TipoDocumento[];

  public errores: string[];
  

  constructor(private clienteService: ClienteService,
    private router: Router){}

  ngOnInit(){

    this.clienteService.getTipoDocumento().subscribe(tipoDocumento => this.tipoDocumento = tipoDocumento);
      
  }
  public create(): void{

    this.clienteService.create(this.cliente).subscribe(
      cliente => {
      this.router.navigate(['/home'])
      swal('Nuevo cliente', `Cliente ${cliente.nombre} fue creado con éxito!`,'success')
      },
      err => {
        this.errores = err.error.errors as string[];
        console.log('Código del error desde backed: ' + err.status);
        console.log(err.error.errors)
      }

    );
    
  }

}
