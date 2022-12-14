import { Component, OnInit } from '@angular/core';
import { UserData } from '../userData';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees: UserData[]=[];
  constructor(private employeeService: EmpService, private router: Router){

  }
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    this.employeeService.getEmpList().subscribe({
      next:(res)=>{
        console.log(res);
        this.employees=res;
      }
    });
  }

  updateEmployee(id:any){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:any){
    this.employeeService.deleteEmployee(id).subscribe({
      next:(response)=>{
        console.log(response);
        window.location.reload();
    }, error:(error)=>{
      console.log(error);
      window.location.reload();
      }
    });
    }

    employeeDetails(id: any){
      this.router.navigate(['employee-details',id]);
    }
    
}
