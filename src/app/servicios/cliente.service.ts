import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cliente } from '../clientes/cliente';
import { map } from 'rxjs';
import swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoDocumento } from '../clientes/tipoDocumento';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Cliente[])
    );
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e => {

        if(e.status==400){
          return throwError(()=>e);
        }

        console.error(e.error.mensaje);
        swal('Error al crear el cliente', e.error.mensaje, 'error');
        return throwError(()=>e);
      })
    );
  }

  getTipoDocumento(): Observable<TipoDocumento[]>{
   return this.http.get<TipoDocumento[]>(this.urlEndPoint + '/tipoDocumento');
  }

}
