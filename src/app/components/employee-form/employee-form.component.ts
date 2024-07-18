import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../Service/http.service';
import { IEmployee } from '../../Interface/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  formbuilder= inject(FormBuilder);
  httpserver= inject(HttpService);
  route= inject(ActivatedRoute);
  router= inject(Router)
    employeeForm = this.formbuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    age:[0,[Validators.required]],
    phone:['',[]],
    salary:[0,[Validators.required]]
  })
  
employeeid!:number
isedit= false
ngOnInit()
{
  this.employeeid= this.route.snapshot.params['id'];
  if(this.employeeid)
    {
      this.isedit=true
      this.httpserver.getemployee(this.employeeid).subscribe(result=>{
        this.employeeForm.patchValue(result);
        console.log(result);
      });
    }
}

  save()
  {
    console.log(this.employeeForm.value);
    const emp :IEmployee={
      name:this.employeeForm.value.name!,
      email:this.employeeForm.value.email!,
      age:this.employeeForm.value.age!,
      phone:this.employeeForm.value.phone!,
      salary:this.employeeForm.value.salary!

    };

    if(this.isedit)
      {
        this.httpserver.updateemployee(this.employeeid,emp).subscribe(()=>{
          console.log("success");
          this.router.navigateByUrl('employeelist');
            });
      }
      else
      {
        this.httpserver.createemployee(emp).subscribe(()=>{
          console.log("success");
          this.router.navigateByUrl('employeelist');
            });
      }
  
  }
}
