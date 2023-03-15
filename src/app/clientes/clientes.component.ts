import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientes:Cliente[];

  constructor(private ClienteService: ClienteService){}

  ngOnInit() {
    this.ClienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
