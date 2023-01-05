import { Component, InjectFlags, OnInit } from '@angular/core';
import { UserData } from '../userData';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { SearchModel } from './searchModel';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees: UserData[]=[];
  searchModel: SearchModel=new SearchModel();
  total:Number=0;
  constructor(private employeeService: EmpService, private router: Router){
    this.searchModel.psize=5;
    this.searchModel.fromValue=1;
    this.searchModel.filterField="department";
    this.searchModel.sort="employeeId";
    this.searchModel.order="asc"
  }
  ngOnInit(): void {
    this.employeeService.getModifiedList(this.searchModel).subscribe({
      next:(response)=>{
        this.employees = response;
        this.total=this.employees.length;
    }, error:(error)=>{
      alert(error);
      }
    });
  }

  mySearch(searchModel:SearchModel){
    this.employeeService.getModifiedList(this.searchModel).subscribe({
      next:(response)=>{
        this.employees = response;
        this.total=this.employees.length;
    }, error:(error)=>{
      alert(error);
      }
    });
  }
  onPageDown(){
    this.searchModel.fromValue=this.searchModel.fromValue-1;
    this.mySearch(this.searchModel);
  }
  onPageUp(){
    this.searchModel.fromValue=this.searchModel.fromValue+1;
    this.mySearch(this.searchModel);
  }
  ontableSizeChange(event:any){
    this.searchModel.fromValue=1;
    this.searchModel.psize=event.target.value;
    this.mySearch(this.searchModel);
  }
  decFlag(){
    if(this.searchModel.fromValue<=1) return true;
    else return false;
  }
  incFlag(){
    if(this.searchModel.psize>this.total)
    return true;
    else return false;
  }
  updateEmployee(id:any){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:any){
    this.employeeService.deleteEmployee(id).subscribe({
      next:(response)=>{
        console.log(response);
        alert('Employee deleted');
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
