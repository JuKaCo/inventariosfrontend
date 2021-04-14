import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RrhhService {
  constructor(private http: HttpClient) { }

  getListaBiometrico(): Observable<any> {
    let url = environment.CEASSBACKEND;
    return this.http.get(url + 'api/v1/param/biometrico/terminal').pipe(
      catchError(this.handleError)
    );
  }

  generarReporteGeneral(val:any): Observable<any> {
    let url = environment.CEASSBACKEND+ 'api/v1/rrhh/reportegeneral';
    return this.http.post(url,val, {responseType: 'blob'}).pipe(
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
}
