import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './userData';

@Injectable({
  providedIn: 'root'
})

export class EmpService {
  public baseUrl = 'http://localhost:8585/hostbooks';

  constructor(private httpClient: HttpClient) { }

  addEmployee(employee:UserData): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/save`, employee);
  }






  updateEmployee(employee:UserData): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/update`, employee);
  }





  getEmpList(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/getAllEmp`);
  }

  getEmployeeById(empId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/getById/${empId}`);
  }

  getEmployeeByMobile(mobile: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/getByMobile?mobile=${mobile}`);
  }

  getEmployeeByName(name: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/getByName?name=${name}`);
  }



  
  deleteEmployee(empId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/deleteEmp?id=${empId}`);
  }

  deleteAllEmployee(): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/deleteAll`);
  }
}
