import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../emp.service';
import { UserData } from '../userData';
import { AddressData } from '../addressData';
import { BankingData } from '../BankingData';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  id! :number;
  employee: UserData=new UserData();
  address: AddressData[]=[];
  bankDetails:BankingData=new BankingData();



  constructor( private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmpService
    ) { }
    



  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe({
      next:(response)=>{
        this.employee=response;
        console.log(response);
    }, error:(error)=>{
      alert(error.error.details);
      }
    });

    // this.employeeService.getAddressByEmpId(this.id).subscribe({
    //   next:(response)=>{
    //     this.address=response;
    //     console.log(response);
        
    //   }, error:(error)=>{
    //     console.log(error.error.details);
    //   }
    // });


    // this.employeeService.getBankDetailsByEmpId(this.id).subscribe({
    //   next:(response)=>{
    //     this.bankDetails=response;
    //     console.log(response);
    //   }, error:(error)=>{
    //     console.log(error.error.details);
    //   }
    // });



  }

  editBankDetails(bankId:any){
    this.router.navigate(['/bank-details-update',bankId]);
  }

}
