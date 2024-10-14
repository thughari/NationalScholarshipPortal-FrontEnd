import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ministry } from './ministry';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  saveStudent(student:Object):Observable<Object>
  {
    return this.http.post("https://national-scholarship-portal.onrender.com/registerstudent",student);
  }

  login(student:any):Observable<any>
  {
    return this.http.post("https://national-scholarship-portal.onrender.com/loginstudent",student);
  }
  nodallogin(nodal:any):Observable<any>
  {
    return this.http.post("https://national-scholarship-portal.onrender.com/nodallogin",nodal);
  }

  ministrylogin(ministry:any):Observable<any>
  {
    return this.http.post("https://national-scholarship-portal.onrender.com/ministry/loginministry",ministry);
  }

  institutelogin(institute:any):Observable<any>
  {
    return this.http.post("https://national-scholarship-portal.onrender.com/institutionlogin",institute);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('email')
  }

  getDealersList():Observable<any>{
    return this.http.get("https://national-scholarship-portal.onrender.com/Students");
  }
}