import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { JPA_API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  constructor(private http : HttpClient) { }

  GetImageById(id : any): Observable<any> {
    return this.http.get(JPA_API_URL+'/'+id)
    .pipe(catchError(this.handleError));
  }
  
  private handleError(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
        console.error('Client Side Error: ', errorResponse.error);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
       return throwError('There is the problem with the Service, Please contact with System Administrator.');
  }
}
