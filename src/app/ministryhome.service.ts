import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinistryhomeService {

  constructor(private myhttp:HttpClient) { }
  restURL:string="https://national-scholarship-portal.onrender.com/"
  ShowDetails(id:String)
  {
    return this.myhttp.get(`${this.restURL}ministry/`+`${id}`);
  }
}
