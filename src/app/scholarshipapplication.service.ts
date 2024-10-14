import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { applicationDetails } from './scholarshipapplicationdetails';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipapplicationService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="https://national-scholarship-portal.onrender.com";

  getStudent(){
    return this.myhttp.get(this.restUrl+"/student")
  }

  addStudent(add:applicationDetails){
    return this.myhttp.post(this.restUrl+"/applystudent",add)
  }
}
