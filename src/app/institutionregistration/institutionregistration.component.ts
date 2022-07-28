import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  form=new FormGroup({
    'institutionCategory':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'inststate':new FormControl('',Validators.required),
    'instdistrict':new FormControl('',Validators.required),
    'institutionCode':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'disecode':new FormControl('',Validators.required),
    'location':new FormControl('',Validators.required),
    'institutionType':new FormControl('',Validators.required),
    'affilatedUniversityState':new FormControl('',Validators.required),
    'affilatedUniversityBoardName':new FormControl('',Validators.required),
    'yearFromWhichAdmissionStarted':new FormControl('',Validators.required),
    'setPassword':new FormControl('',Validators.required),
    'confirmPassword':new FormControl('',Validators.required),
    'addressLine1':new FormControl('',Validators.required),
    'addressLine2':new FormControl('',Validators.required),
    'city':new FormControl('',Validators.required),
    'state':new FormControl('',Validators.required),
    'district':new FormControl('',Validators.required),
    'pincode':new FormControl('',Validators.required),
    'principleName':new FormControl('',Validators.required),
    'mobileNumber':new FormControl('',Validators.required),
    'telephone':new FormControl('',Validators.required)
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
