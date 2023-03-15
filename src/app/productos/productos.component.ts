import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, startWith } from 'rxjs';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from './producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];

  constructor(private productoService: ProductoService, private routerActivate:ActivatedRoute){}

  categoria: string = "";

  ngOnInit() {

    this.categoria=this.routerActivate.snapshot.params['descripcion'];

    this.productoService.getProductos(this.categoria)
    .subscribe(productos => {
      console.log(productos);
      this.productos = productos;
    }, (error) =>{

    });
      
   


      
   
    
  }

}
