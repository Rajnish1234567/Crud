import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../emp.service';
import { UserData } from '../userData';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  id! :number;
  employee !: UserData;
  constructor( private route: ActivatedRoute,
    private employeeService: EmpService) { 
      this.employee = new UserData();
    }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe({
      next:(response)=>{
        this.employee=response;
    }, error:(error)=>{
      alert(error.error.details);
      }
    });
  }

}
