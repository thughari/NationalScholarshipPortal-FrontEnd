import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  response:any;

  constructor(private myhttp:HttpClient) { }
  restURL:string="http://localhost:8989/ministry";
  login(add:any):Observable<any>
  {
    //return this.myhttp.get();
    const header1= {'Content-Type':'application/json',};
    return this.myhttp.get<any>(this.restURL+"/Adminlogin?admin="+add.admin+"&password="+add.password,
    {
        headers: header1,
        observe: 'response',
        responseType: 'json'
    }).pipe(catchError(this.handleError))
     //this.restURL+"/login?Email="+add.Email+"&password="+add.password
  }
  handleError(error:any) 
  {
    let errorMessage ='';
    if (error.error instanceof ErrorEvent) 
    {
      // FrontEnd error
      errorMessage = 'Front Side Error'
    } 
    else 
    {
      // BackEnd error
      errorMessage = 'Invalid Email or Password'
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  extractData(response: Response) 
  {
    throw new Error('Method not implemented.');
  }
}
