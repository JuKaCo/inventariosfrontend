import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioProductoService {

  constructor(
    private http: HttpClient
  ) { }
  //producto
  set(data: any): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/producto/crear';
    return this.http.post(url, data).pipe(
      catchError(this.handleError)
    );
  }
  setEdita(data: any,id:string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/producto/editar/'+id;
    return this.http.put(url, data).pipe(
      catchError(this.handleError)
    );
  }
  setElimina(id: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/producto/cambiarestado/'+id;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }
  getLista(data: any): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/producto/listar?indice=' + data.indice + '&limite=' + data.limite + '&filtro=' + data.filtro;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  getRegistro(uuid: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/producto/obtener/' + uuid;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  getLiname(filtro: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/param/liname?filtro='+filtro;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  getLinadime(filtro: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/param/linadime?filtro='+filtro;
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
