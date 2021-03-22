import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OauthConect {

  constructor(private http: HttpClient) { }

  enviarDatosLogin(data: any): Observable<any> {
    const payload = new HttpParams()
  .set('client_id', data.client_id)
  .set('username', data.username)
  .set('password', data.password)
  .set('grant_type', data.grant_type);
    let url = environment.OAUTH2SERVICE;
    return this.http.post(url, payload).pipe(
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
    //window.alert(errorMessage);
    return throwError(error);
    //return error;
  }
}
