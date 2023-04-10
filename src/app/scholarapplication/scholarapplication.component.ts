import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipapplicationService } from '../scholarshipapplication.service';
import { applicationDetails } from '../scholarshipapplicationdetails';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-scholarapplication',
  templateUrl: './scholarapplication.component.html',
  styleUrls: ['./scholarapplication.component.css']
})
export class ScholarapplicationComponent implements OnInit {
  optionValue:any;
  schemeValue:any;
  constructor(private myrouter:Router,private bas:ScholarshipapplicationService) { }

  ngOnInit(): void {
  }
  form=new UntypedFormGroup({
    'name':new UntypedFormControl('',Validators.required),
    'aadharNo':new UntypedFormControl('',Validators.required),
    'phoneNumber':new UntypedFormControl('',Validators.required),
    'email':new UntypedFormControl('',Validators.compose([Validators.email, Validators.required]))
  });

  Details:applicationDetails = new applicationDetails();

   savescholarshipDetails(basicDetailsForm:any){
    this.Details=basicDetailsForm.value;
    console.log(basicDetailsForm.value);
    console.log(this.Details);
    alert("Registration done");
    this.myrouter.navigate(['/studenthome']);
    this.bas.addStudent(this.Details).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
      },
      (error)=>{
         console.log(error)
      }
      )
   }

}
