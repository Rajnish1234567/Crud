import { Component, OnInit } from '@angular/core';
import { UserData } from '../userData';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  updatedEmp: UserData = new UserData();
  id!:number;
  
  constructor(
    private employeeService: EmpService, 
    private router: Router,
    private route: ActivatedRoute
    ) {}
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.updatedEmp=data;
    }, error=>{
      alert(error.error.details);
    });
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.updatedEmp).subscribe(data=>{
      this.router.navigate(['/employees']);
    },error=>{
      alert(error.error.details);
    });
  }

}
