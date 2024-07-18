import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEmployee } from '../Interface/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL="https://localhost:7256";
  http= inject(HttpClient)
  constructor() { }

  getallemployee()
  {
    return this.http.get<IEmployee[]>('https://localhost:7256/api/Employee')
  }

  createemployee(employee:IEmployee)
  {
    return this.http.post('https://localhost:7256/api/Employee',employee);

  }
  getemployee(Id:number)
  {
    return this.http.get<IEmployee>('https://localhost:7256/api/Employee/' + Id)
  }

  updateemployee(Id:number, employee:IEmployee)
  {
    return this.http.post<IEmployee>('https://localhost:7256/api/Employee/' + Id, employee)
  }
  deleteemployee(Id:number)
  {
    return this.http.delete<IEmployee>('https://localhost:7256/api/Employee/' + Id)
  }
}
