import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(
    private http: HttpClient
  ) { }
  
  getListaNotificacionSimple(): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/notificacion/lista/simple';
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getListaNotificacion(data: any): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/notificacion/listar?indice=' + data.indice + '&limite=' + data.limite + '&filtro=' + data.filtro;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  confirmaNotificacion(id: number ): Observable<any> {
    let url = `${environment.CEASSBACKEND}api/v1/notificacion/confirma/${id}`;
    return this.http.patch(url, {}).pipe(
      catchError(this.handleError)
    );
  }

  inactivaNotificacion(id: number ): Observable<any> {
    let url = `${environment.CEASSBACKEND}api/v1/notificacion/cambia_estado/${id}`;
    return this.http.delete(url).pipe(
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
