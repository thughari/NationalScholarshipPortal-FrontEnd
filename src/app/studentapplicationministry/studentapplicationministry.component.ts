import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentapplicationsService } from '../studentapplications.service';

@Component({
  selector: 'app-studentapplicationministry',
  templateUrl: './studentapplicationministry.component.html',
  styleUrls: ['./studentapplicationministry.component.css']
})
export class StudentapplicationministryComponent implements OnInit {

  Studentapplication:any
  ShowDetails:any;
  restURL: string;
  constructor(private stu:StudentapplicationsService,private myRouter:Router) {
    this.restURL="https://national-scholarship-portal.onrender.com/"
   }

  ngOnInit(): void {
    this.reloadData();
  }
  
  finalApprove(application:any){
    const newData={finalStatus:true}
    this.stu.updateFinalStatus(application,newData)
      .subscribe((data: any) => console.log(data),
        (error: any) => console.log(error));
        
  }

  remove(application:any){
    
    this.stu.deleteStudent(application.aadhar).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
      
  }

  reloadData() {
    this.Studentapplication=this.stu.getFinalApplicationList();
  }
}
