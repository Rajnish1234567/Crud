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

  constructor(private employeeService: EmpService) { 

  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.saveEmployee();
  }
  saveEmployee(){
    this.employeeService.addEmployee(this.userData).subscribe(data=>{
      console.log(data);
    }, err=>console.log(err)
    )
  }
}
