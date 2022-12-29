import { Component, OnInit } from '@angular/core';
import { UserData } from '../userData';
import { EmpService } from '../emp.service';
import { AddressData } from '../addressData';
import { BankingData } from '../BankingData';
@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  userData: UserData = new UserData();
  addrss: AddressData=new AddressData();
  addArray: AddressData[]=[];
  bank: BankingData=new BankingData();

  flag: boolean = true;

  constructor(private employeeService: EmpService) { 
  }

  ngOnInit(): void {
    this.addrss=new AddressData();
    this.addArray.push(this.addrss);
  }

  addAddress(){
  this.addrss=new AddressData();
  this.addArray.push(this.addrss);
  }
  removeAddress(  i:number){
    this.addArray.splice(i, 1);
  }
  onSubmit(){
    this.userData.addressList=this.addArray;
    this.userData.bankingDetails=this.bank;
    this.employeeService.addEmployee(this.userData).subscribe(data=>{
      console.log(data);
      alert("employee added successfully");
    }, error=>{
      console.log(error);
      alert(error.error.message);
    });
  }
  
  revertFlag(){
    this.flag=!this.flag;
  }
}
