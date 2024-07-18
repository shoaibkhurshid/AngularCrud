import { Component, inject } from '@angular/core';
import { IEmployee } from '../../Interface/employee';
import { HttpService } from '../../Service/http.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
 
  http= inject(HttpService)
  router=inject(Router);
  employeeList : IEmployee[]=[];
  displayedColumns: string[] = [ 
    'id',
    'name',
    'email',
    'phone',
    'age',
    'salary',
    'action'
  ];
  
  ngOnInit()
  {
    this.getemployeelist();
  }

  edit(id:number)
  {
     this.router.navigateByUrl('/employee/'+ id)
  }

  delete(id:number)
  {
    this.http.deleteemployee(id).subscribe(()=>{
      console.log("delete");
      this.getemployeelist();
    })
  }

  getemployeelist()
  {
    this.http.getallemployee().subscribe((data:any)=>{
      this.employeeList=data;
      console.log(this.employeeList);
  })
  }
}
