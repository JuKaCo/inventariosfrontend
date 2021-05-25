import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministraDosificacionService {

  constructor(private http: HttpClient) { }
  //cliente
  set(data: any): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/factura/dosificacion/crear';
    return this.http.post(url, data).pipe(
      catchError(this.handleError)
    );
  }
  setEdita(data: any,id:string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/factura/dosificacion/editar/'+id;
    return this.http.put(url, data).pipe(
      catchError(this.handleError)
    );
  }
  setElimina(id: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/factura/dosificacion/cambiarestado/'+id;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }
  getLista(data: any): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/factura/dosificacion/listar?indice=' + data.indice + '&limite=' + data.limite + '&filtro=' + data.filtro+'&estado='+data.estado;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  getRegistro(uuid: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/factura/dosificacion/obtener/' + uuid;
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
