import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Institution } from '../institution';
import { InstitutionregistrationService } from '../institutionregistration.service';

@Component({
  selector: 'app-institutionregistration',
  templateUrl: './institutionregistration.component.html',
  styleUrls: ['./institutionregistration.component.css']
})
export class InstitutionregistrationComponent implements OnInit {

  constructor(private add:InstitutionregistrationService,myHttp:HttpClient,private myrouter:Router) { }

  ngOnInit(): void {
  }
  form=new UntypedFormGroup({
    'institutionCategory':new UntypedFormControl('',Validators.required),
    'name':new UntypedFormControl('',Validators.required),
    'inststate':new UntypedFormControl('',Validators.required),
    'instdistrict':new UntypedFormControl('',Validators.required),
    'institutionCode':new UntypedFormControl('',Validators.required),
    'email':new UntypedFormControl('',Validators.required),
    'disecode':new UntypedFormControl('',Validators.required),
    'location':new UntypedFormControl('',Validators.required),
    'institutionType':new UntypedFormControl('',Validators.required),
    'affilatedUniversityState':new UntypedFormControl('',Validators.required),
    'affilatedUniversityBoardName':new UntypedFormControl('',Validators.required),
    'yearFromWhichAdmissionStarted':new UntypedFormControl('',Validators.required),
    'setPassword':new UntypedFormControl('',Validators.required),
    'confirmPassword':new UntypedFormControl('',Validators.required),
    'addressLine1':new UntypedFormControl('',Validators.required),
    'addressLine2':new UntypedFormControl('',Validators.required),
    'city':new UntypedFormControl('',Validators.required),
    'state':new UntypedFormControl('',Validators.required),
    'district':new UntypedFormControl('',Validators.required),
    'pincode':new UntypedFormControl('',Validators.required),
    'principleName':new UntypedFormControl('',Validators.required),
    'mobileNumber':new UntypedFormControl('',Validators.required),
    'telephone':new UntypedFormControl('',Validators.required)
  });

  Institution:Institution=new Institution();

  saveInstitution()
  
  {
      this.Institution=this.form.value;
      console.log(this.form.value)
      this.add.addInstitution(this.Institution).subscribe(
        (data)=>{
          console.log(data);
          alert("Institution  Added!!")
          this.myrouter.navigate(['/institutionhome']);
        },
        (error)=>
        {
          console.log(error)
        }

      )

  }

}
