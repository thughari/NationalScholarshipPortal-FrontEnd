import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Institution } from '../institution';
import { InstitutionregistrationService } from '../institutionregistration.service';
import { student } from '../student';
import { StudentregistrationService } from '../studentregistration.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  constructor(private vhs:StudentregistrationService,myHttp:HttpClient, private myrouter:Router) { }



  ngOnInit(): void {

  }
  form=new UntypedFormGroup({
    'stateofDomicile':new UntypedFormControl('',Validators.required),
    'dist':new UntypedFormControl('',Validators.required),
    'name':new UntypedFormControl('',Validators.required),
    'dob':new UntypedFormControl('',Validators.required),
    'gender':new UntypedFormControl('',Validators.required),
    'mobileNumber':new UntypedFormControl('',Validators.required),
    'email':new UntypedFormControl('',Validators.compose([Validators.email, Validators.required])),
    'institutionCode':new UntypedFormControl('',Validators.required),
    'aadhar':new UntypedFormControl('',Validators.required),
    'ifsc':new UntypedFormControl('',Validators.required),
    'accountno':new UntypedFormControl('',Validators.required),
    'bankname':new UntypedFormControl('',Validators.required),
    'password':new UntypedFormControl('',Validators.required),
  });
  student:student=new student();
  saveStudent()
  {
      this.student=this.form.value;
      console.log(this.form.value)
      console.log(this.student)
      alert("registration done");
      this.myrouter.navigate(['/studentlogin']);

      this.vhs.addStudent(this.student).subscribe(
        (data)=>{
          console.warn("submited successfully")
          console.log(data);
          alert("Registration done")
        },
        (error)=>
        {
          console.log(error)
        }
      )
  }
}