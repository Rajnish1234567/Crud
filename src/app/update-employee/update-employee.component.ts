import { Component, OnInit } from '@angular/core';
import { UserData } from '../userData';
import { EmpService } from '../emp.service';
import { AddressData } from '../addressData';
import { BankingData } from '../BankingData';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  addrss: AddressData=new AddressData();
  addArray: AddressData[]=[];
  userData = new UserData();
  bank: BankingData=new BankingData();
  id!:number;
  
  constructor(
    private employeeService: EmpService, 
    private router: Router,
    private route: ActivatedRoute
    ) {}
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.userData=data;
      console.log(this.userData,"userData");
      this.addArray=this.userData.addressList;
    }, error=>{
      alert(error.error.details);
    });
  
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
  updateEmployee(){
    this.employeeService.updateEmployee(this.userData).subscribe(data=>{
      this.router.navigate(['/employees']);
    },error=>{
      alert(error.error.details);
    });
  }

}
