import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './userData';
import { AddressData } from './addressData';
import { BankingData } from './BankingData';

@Injectable({
  providedIn: 'root'
})

export class EmpService {
  public baseUrl = 'http://localhost:8585/hostbooks';

  constructor(private httpClient: HttpClient) { }


  // -------------------employeeService-------------------------


  addEmployee(userData: UserData): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/emp/save`,userData);
  }

  updateEmployee(userData:UserData): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/emp/update`, userData);
  }

  getEmpList(): Observable<any> {
    return this.httpClient.get<UserData>(`${this.baseUrl}/emp/getAllEmp`);
  }

  getEmployeeById(empId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/emp/getById/${empId}`);
  }

  getEmployeeByMobile(mobile: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/emp/getByMobile?mobile=${mobile}`);
  }

  deleteEmployee(empId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/emp/deleteEmp?eid=${empId}`);
  }



  // ----------------------AddressService-------------------------

  addAddress(address: AddressData):Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/address/save`, address);
  }

  getAddressByEmpId(empId: Number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/address/getByEmpId/${empId}`);
  }

  deleteAddressByEmpId(empId: Number, addId: Number):Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}/address/delete?empId=${empId}&addId=${addId}`);
  }



  // -----------------------BankingDetails-----------------------------

  updateBankDetails(bankDetails:BankingData):Observable<any>{
    return this.httpClient.put<any>(`${this.baseUrl}/bank/update`,bankDetails);
  }
  getBankDetailsByBankId(bankId:Number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/bank/getByBankId?bankId=${bankId}`);
  }



}