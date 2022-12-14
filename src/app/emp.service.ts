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

  getEmpList(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/getAllEmp`);
  }

  addEmployee(employee:UserData): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/save`, employee);
  }
  getEmployeeById(empId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/getById/${empId}`);
  }
  updateEmployee(employee:UserData): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/update`, employee);
  }
  deleteEmployee(empId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/deleteEmp?id=${empId}`);
  }
}
