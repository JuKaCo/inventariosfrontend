import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<any> {
    let url = environment.CEASSBACKEND;
    return this.http.get(url + 'api/v1/general/menu').pipe(
      catchError(this.handleError)
    );
  }

  getParam(codigo:string,filtro:string): Observable<any> {
    let url = environment.CEASSBACKEND;
    return this.http.get(url + 'api/v1/param/gen/'+codigo+'?filtro='+filtro).pipe(
      catchError(this.handleError)
    );
  }

  getParamUrl(dir:string,filtro:string): Observable<any> {
    let url = environment.CEASSBACKEND;
    return this.http.get(url + 'api/v1/param/'+dir+'?filtro='+filtro).pipe(
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
    return throwError(error);
  }

  /*  ********* Notifiaciones ************ */

  getListaNotificacion(): Observable<any> {
    let url = environment.CEASSBACKEND + 'api/v1/notificacion/listar';
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  inactivaNotificacion(id: number ): Observable<any> {
    let url = `${environment.CEASSBACKEND}api/v1/notificacion/cambia_estado/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  confirmaNotificacion(id: number ): Observable<any> {
    let url = `${environment.CEASSBACKEND}api/v1/notificacion/confirma/${id}`;
    return this.http.patch(url, {}).pipe(
      catchError(this.handleError)
    );
  }
}
