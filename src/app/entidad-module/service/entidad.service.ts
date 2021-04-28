import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  constructor(
    private http: HttpClient
  ) { }
  //proveedor
  setProveedor(data: any): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/proveedor/crear';
    return this.http.post(url, data).pipe(
      catchError(this.handleError)
    );
  }
  setEditaProveedor(data: any,id:string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/proveedor/editar/'+id;
    return this.http.put(url, data).pipe(
      catchError(this.handleError)
    );
  }
  setEliminaProveedor(id: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/proveedor/cambiarestado/'+id;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }
  getListaProveedor(data: any): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/proveedor/listar?indice=' + data.indice + '&limite=' + data.limite + '&filtro=' + data.filtro;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  getRegistroProveedor(uuid: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/proveedor/obtener/' + uuid;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  //cliente
  setCliente(data: any): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/cliente/crear';
    return this.http.post(url, data).pipe(
      catchError(this.handleError)
    );
  }
  setEditaCliente(data: any,id:string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/cliente/editar/'+id;
    return this.http.put(url, data).pipe(
      catchError(this.handleError)
    );
  }
  setEliminaCliente(id: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/cliente/cambiarestado/'+id;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }
  getListaCliente(data: any): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/cliente/listar?indice=' + data.indice + '&limite=' + data.limite + '&filtro=' + data.filtro;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  getRegistroCliente(uuid: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/cliente/obtener/' + uuid;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(error);
  }
}
