import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinameService {

  constructor(
    private http: HttpClient
  ) { }

  uploadLinameValid(dato: File, cometarios: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/liname/cargar/validar';
    const formData = new FormData();
    formData.append('uploadFile', dato, dato.name);
    formData.append('descripcion', cometarios);
    return this.http.post(url, formData).pipe(
      catchError(this.handleError)
    );
  }

  uploadLinameConsolida(dato: File, cometarios: string): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/liname/cargar/consolidar';
    const formData = new FormData();
    formData.append('uploadFile', dato, dato.name);
    formData.append('descripcion', cometarios);
    return this.http.post(url, formData).pipe(
      catchError(this.handleError)
    );
  }

  getListaLiname(data:any): Observable<any> {
    let url = environment.CEASSBACKEND;
    return this.http.get(url + 'api/v1/liname/listar?indice='+data.indice+'&limite='+data.limite+'&filtro='+data.filtro).pipe(
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
