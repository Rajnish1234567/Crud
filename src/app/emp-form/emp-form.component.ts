import { Component, OnInit } from '@angular/core';
import { UserData } from '../userData';
import { EmpService } from '../emp.service';
 

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  userData: UserData = new UserData();
  flag: boolean = true;
  constructor(private employeeService: EmpService) { 

  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.saveEmployee();
  }
  
  saveEmployee(){
    this.employeeService.addEmployee(this.userData).subscribe(data=>{
      alert("employee added successfully");
    }, error=>{
      alert(error.error.details);
    });
  }
  revertFlag(){
    this.flag=!this.flag;
  }
}
