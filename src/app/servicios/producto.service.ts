import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../productos/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[];

  private urlEndPoint: string = 'http://localhost:8080/productos/traer/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  

  constructor(private http: HttpClient) { }

  public getProductos(categoria: string):Observable<Producto[]>{
   const url= `${this.urlEndPoint}${categoria}` 
  return this.http.get<Producto[]>(url);

 }

//  getProductos(categoria: string): Observable<Producto[]>{
//   return this.http.get(`${this.urlEndPoint}${categoria}`).pipe(
//     map( (response) => response as Producto[])
//   );
// }

}



